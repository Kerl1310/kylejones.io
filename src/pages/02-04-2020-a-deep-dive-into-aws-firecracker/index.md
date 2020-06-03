---
path: "/a-deep-dive-into-aws-firecracker"
date: "2020-04-02"
title: "A Deep Dive into AWS Firecracker"
tags:
    - aws
    - open-source
    - serverless
featuredImage: "/aws-firecracker-architecture.png"
isFeatured: true
---
Firecracker is a Virtual Machine Monitor, written in [Rust](https://www.rust-lang.org/) that Amazon Web Services use to power it's Serverless Compute services - [Lambda](https://aws.amazon.com/lambda/) and [Fargate](https://aws.amazon.com/fargate/). Firecracker makes use of Linux's [Kernel-based Virtual Machine](https://www.linux-kvm.org/page/Main_Page) virtualisation infrastructure to provide its products with MicroVMs.

## What's the Point?

The development of Firecracker was undertaken to meet several objectives. These were:
* To run thousands of functions (up to 8000) on a single machine with minimal wasted resources.
* To allow thousands of functions to run on the same hardware, protected against a variety of risks including security vulnerabilities, such as side-channel attacks like [Spectre](https://meltdownattack.com/).
* To perform similarly to running natively, with no impact from the consumption of resources by other functions, retaining the possibility of over committing resources while providing functions with only the resources it needs.
* To be able to start new and clean up old functions quickly.

## So How Does It Work?

The invoke traffic gets delivered via the Invoke REST API, which authenticates requests, checks for authorization and then loads the function metadata.

The requests are then handled by the Worker Manager, which sticky-routes to as few workers as possible to improve cache locality, enable connection re-use and amortize the cost of moving and loading customer code. Once the Worker Manager has identified which worker should run the code, it advises the Invoke service, cutting down on round-trips by having it send the payload directly to the worker.

![Architectural diagram showing that the Frontend sends data directly to the Workers.](/firecracker-data-flow.jpg)

Each worker potentially offers thousands of MicroVMs, each providing a single slot and Firecracker process, with each slot only ever used for a single concurrent invocation of a function, but many serial invocations. Each slot supplies a pre-loaded execution environment for a function, including a minimized Linux kernel, userland and a shim control process. This method is like that offered by [QEMU](https://www.qemu.org/), [Graphene](https://grapheneproject.io/), [gVisor](https://cloud.google.com/blog/products/gcp/open-sourcing-gvisor-a-sandboxed-container-runtime) and [Drawbridge](https://www.microsoft.com/en-us/research/project/drawbridge/) (and by extension, [Bascule](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/bascule_eurosys13.pdf)) in that they provide some of the operating system functionality within the userspace to reduce the kernel surface and so improve security. On serial invocations, the MicroVM and the process the function runs in are re-used.

If a slot is available, the Worker Manager performs a lightweight concurrency control protocol and informs the front-end that the slot is available for utilization. The front-end then calls the MicroManager with the details of the slot and payload, which is then passed onto the shim running inside the MicroVM for that slot. The MicroManager keeps a small pool of pre-booted MicroVMs ready to be used, as the already fast 125ms boot-up time offered by Firecracker is still not fast enough for the scale-up path of Lambda. Upon completion, the MicroManager gets given either a response payload, or the details of an error which are then returned to the front-end.

However, if no slots are available, the Worker Manager calls the Placement service to request that a new slot gets created for the function. This service then optimizes the process (taking less than 20ms on average), ensuring that the use of resources such as CPU is even across the fleet, before requesting that a particular worker generates a new slot. To reduce blocking of user requests, the MicroManager keeps a small pool of pre-booted MicroVMs ready to be used when requested by the Placement service.

For each MicroVM, the Firecracker process handles creating and managing the MicroVM, providing device emulation and handling VM exits. 

![Diagram showing the overall architecture of the Lambda Worker.](/firecracker-worker-architecture.jpg)

The shim process communicates through the MicroVM boundary using a TCP/IP socket with the MicroManager - a process that manages a single worker's Firecracker processes. The MicroManager provides slot management and locking APIs to the Placement service and an invoke API to the front-end.

As an extra level of security against unwanted behaviour (including code injection), a jailer implements a wrapper around Firecracker which puts it in a restrictive sandbox before booting the guest.

### Further Reading
[Firecracker: Lightweight Virtualization
for Serverless Applications](https://www.usenix.org/system/files/nsdi20-paper-agache.pdf)
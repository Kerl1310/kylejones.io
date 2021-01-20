---
path: "/how-to-reduce-the-chances-of-an-outage"
date: "2021-01-25"
title: "How to Reduce the Chances of an Outage"
tags:
    - software-engineering
    - cloud
featuredImage: "/how-to-reduce-the-chances-of-an-outage.png"
isFeatured: false
---
The popular messaging service Slack recently experienced a global outage which impacted millions of users, the majority of which were individuals working from home or remote learning due to the Coronavirus pandemic. The outage lasted for an extended period, potentially impacting their service level agreements (SLAs), impacts the brand while coming hot on the heels of the announcement of their $27.7 billion acquisition by Salesforce. Outages like the one Slack experienced are increasingly common in a technology focused society, so how do we avoid costly issues like this?

## What causes an outage?
An outage (also known as downtime) is a period of time when a given service or system is unavailable, failing to provide and perform  it's primary functionality. Completely removing the possibility of experiencing an outage is almost impossible, however there are a number of ways in which the odds of an outage can be significantly reduced. Some of the things that can be done to try and avoid an incident are:
* Testing
* Horizontal Scaling
* Chaos Engineering
* Resiliency Improvements to the Software
* Improving Observability
* Improving Processes

## What testing should be carried out?
Having a high test coverage is only part of the story when it comes to testing an application's robustness - a high unit test coverage can be deceiving as this simply proves that the software functions as expected, in isolation. Unit testing should be combined with other forms of testing including integration testing, security testing and performance testing (which should also cover various subtypes such as load testing and stress testing). Including a wider array of testing types ensures that both the functional and non-functional factors that could impact the overall system are being checked under various conditions that could occur in production.

## What is horizontal scaling?
Horizontal scaling improves the application's stability and robustness, but simply means that each component in the system can increase it's capacity by adding more instances. For example, a simple CRUD application that uses RDS in AWS might horizontally scale by adding additional MySQL RDS instances as read replicas in multiple availability zones (AZs).

## What is chaos engineering?
Chaos engineering is a form of resiliency testing created by Netflix when they built their Chaos Monkey application, and functions by turning off random components in their architecture to simulate outages for particular services. This aided Netflix in their migration to a cloud hosted infrastructure by allowing them to identify potential pitfalls, particularly by finding dependencies that, when removed, would have caused incidents in a production environment. Doing this regularly in a non-production environment allowed these incidents to occur in a controlled environment that does not impact customers, mitigating the potential impact to the business.

## How do we improve resiliency?
There are a number of resiliency improvements that can be made to an application in order to reduce the chances of it causing or intensifying an outage. Some simple improvements can include adding an exponential backoff retry strategy to calls to other services, building circuit breaker functionality into the system and implementing queues between services in order to provide a smoother, more consistent throughput to the service. Implementing queues also brings with it the advantage of assisting in decoupling the components from each other, meaning that each part of the system is more independent and has fewer dependencies. These strategies can also help to reduce load and enhance the fault tolerance of the application, both of which result in a higher level of resiliency.

## What about observability?
Successful deployment of a component is only part of the story. Many deployments appear successful at first before running into issues due to use of resources such as memory, an unexpected failure that occurs irregularly or even security issues that are not at first apparent. These reasons are why observability is incredibly important as logs, metrics and traces allow you to continually monitor your system as well as notifying your technical team when a component begins to show signs of an underlying problem using alerts.

## What processes should be in place?
Good processes should underpin the entire engineering practice and ensure that human error is avoided or that any incidents that occur are recitified swiftly. Code reviews should be carried out to mitigate as many potential issues as possible, whereas processes like on-call policies and incident post-mortems foster a culture of continually iterating and learning from mistakes when they do occur.


While these methods do not necessarily prevent outages, they are strong foundations when it comes to reducing the odds of an incident occurring and it causing a total outage. These incidents are rare, but when they do occur they can prove costly to an organisation and preparation should be in place to minimise these costs and the chances of such an occurrence.
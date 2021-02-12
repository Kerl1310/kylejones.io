---
path: "/how-to-perform-a-constructive-code-review"
date: "2021-03-16"
title: "How to Perform a Constructive Code Review"
tags:
    - software-engineering
featuredImage: "/how-to-perform-a-constructive-code-review.png"
isFeatured: true
---
Many businesses have a dedicated software engineering department, whether its to maintain a website or develop apps. The majority of these departments will perform code reviews as part of their daily routine. But what's the difference between a negative experience and a constructive review?

## What is a code review?
A code review is a common practice in software engineering that aims to ensure the quality of an implementation is maintained by having the author's work examined by one or more of their peers.

## Where should you start with a code review?
Productive code reviews should always start with two elements: the ticket for the issue and any test files in the change request.
The ticket will include an overview of the scenario and any further information required for the review, such as designs or non-technical considerations. These help to understand the context behind the work.
The test files detail the various scenarios and outcomes that the functional changes are hoping to solve and achieve, giving the reviewer a better understanding of the problem and the proposed solution. When reviewing the test files (and later on the functional code itself), it is essential to consider any edge cases that may have gotten overlooked. These edge cases may seem insignificant but could result in a service outage due to unexpected behaviour.
Following on from these, the reviewer should turn their attention towards the files with the most changes in them. These files are likely to be the core of the implementation and therefore saves time when reviewing.

## How should you conduct the code review?
A constructive code review is often tough to achieve. Teams and individuals will often only identify the problems with the change request. Some will even solutionise after spotting a potential issue. The pitfall that many forget is that a review is an evaluation of both the strong and weak points. Not many reviewers praise the positives of an implementation, even when a solution is particularly elegant, or when edge cases are addressed.
As mentioned above, some reviewers will identify a problem and proceed to solutionise. Solutionising is the responsibility of the author of the change and not the reviewer. Reviewers that solutionise squander time when it could be spent on other problems, while also demotivating the author of the change. Many software engineers thrive on the problem-solving element of their work and would prefer to do this themselves.

## What about the finer things?
The reviewer should also avoid demanding that trivial changes are made before approving the work. Identifying issues such as spelling mistakes, poor naming & micro-optimizations are useful as they affect the code quality. However, concerns like these should be noted and fixed in a follow-up change - the purpose of a change request is to improve the overall product and codebase, so it doesn't necessarily have to be perfect on the first iteration.
When reviewing a change request, pay attention to the finer details like file paths and names referenced in the code. These are easily overlooked, particularly during refactoring, but will break the feature if they are not correct. Similarly, with any resources or files referenced, confirm that these were included with the change.

## When should you do the review?
Many engineers are reluctant to carry out code reviews because of the need to context switch. To avoid unnecessarily context switching, conduct code reviews before or after another unavoidable context switch such as a break or meeting. Doing so provides the reviewer with a choice of regular, but flexible times to conduct reviews. Despite the focus on flexibility, code reviews should not stagnate for more than a day. The velocity of the team is more important than the velocity of the individual. It's easy for multiple reviews to stack up and begin to block other engineers or tickets.
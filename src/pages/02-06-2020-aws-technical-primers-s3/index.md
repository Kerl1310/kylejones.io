---
path: "/aws-technical-primers-s3"
date: "2020-06-02"
title: "AWS Technical Primers - S3"
tags:
    - aws
featuredImage: "/aws-s3-cover.png"
---
# AWS Technical Primers - S3
## Overview
[Amazon Simple Storage Service (S3)](https://aws.amazon.com/s3) is a key-based object storage cloud service with 99.999999999% durability across multiple availability zones. It is infinitely scalable with a maximum individual object size of 5TB, and a maximum single upload size of 5GB. Amazon recommend that objects larger than 100MB should be uploaded using the service's Multipart Upload feature. S3 features a number of different tiers:
 * Standard
 * Intelligent-Tiering
 * Standard-Infrequent Access (IA)
 * One Zone-Infrequent Access (One Zone-IA)
 * Glacier
 * Glacier Deep Archive

## Security
As a part of [Amazon's Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) for security, the majority of S3 tiers offers secure upload and downloading using SSL endpoints via HTTPS as well as encryption at rest using server side encryption (SSE). The SSE provides three options for secret keys:
 * S3 Managed Keys (SSE-S3) is an integrated solution where Amazon handles key management and key protection.
 * Customer Managed Keys (SSE-C) allows you to use S3 to perform the encryption and decryption of your objects while retaining control of the keys.
 * Key Management Service Keys (SSE-KMS) allows you to use AWS Key Management Service (AWS KMS) to manage encryption keys, which provides additional security benefits including separate permissions for the master key and an audit trail. This option supports efforts to comply with PCI-DSS, HIPAA/HITECH and FedRAMP.

## Pricing
S3 is priced by usage, with each tier priced slightly differently. The service is billed on a number of factors:
 * Storage
 * Requests and data retrievals
 * Data transfer
 * Management and replication
AWS offer a [Free Usage Tier](https://aws.amazon.com/free/) for every month for the first year in all regions except GovCloud, which includes
 * 5GB storage
 * 20,000 GET requests
 * 2,000 PUT requests
 * 15GB data transfer out

## Additional Functionality
### Event Notifications

### Query in Place

## Common Use Cases
 * Backup and File Storage
 * Application hosting (An example of this is [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
 * Media hosting
 * Software/File hosting for others to download (An example of this use is with [BitTorrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3TorrentPublish.html)

## Code Snippets

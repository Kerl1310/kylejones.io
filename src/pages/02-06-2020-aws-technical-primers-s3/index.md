---
path: "/aws-technical-primers-s3"
date: "2020-06-02"
title: "AWS Technical Primers - S3"
tags:
    - aws
featuredImage: "/aws-s3-cover.png"
isFeatured: false
---
## Overview
[Amazon Simple Storage Service (S3)](https://aws.amazon.com/s3) is a key-based object storage cloud service with 99.999999999% (11 9s) of durability across multiple availability zones. It is infinitely scalable with a maximum individual object size of 5TB, and a maximum single upload size of 5GB. Amazon recommends that objects larger than 100MB should be uploaded using the service's Multipart Upload feature. S3 features a number of different storage classes:
 * Standard
 * Intelligent-Tiering
 * Standard-Infrequent Access (IA)
 * One Zone-Infrequent Access (One Zone-IA)
 * Glacier
 * Glacier Deep Archive

![S3 Storage Classes in order from fastest, most frequently accessed to the slowest and least frequently accessed.](/s3-storage-classes.png)

## Security
As a part of [Amazon's Shared Responsibility Model](https://aws.amazon.com/compliance/shared-responsibility-model/) for security, the majority of S3's storage classes offer secure upload and downloading using SSL endpoints via HTTPS as well as encryption at rest using server-side encryption (SSE). The SSE provides three options for secret keys:
 * S3 Managed Keys (SSE-S3) is an integrated solution where Amazon handles key management and key protection using [AES-256](https://www.atpinc.com/blog/what-is-aes-256-encryption).
 * Customer Managed Keys (SSE-C) allows you to use S3 to perform the encryption and decryption of your objects using AES-256 while retaining control of the keys.
 * Key Management Service Keys (SSE-KMS) allows you to use [AWS Key Management Service (AWS KMS)](https://aws.amazon.com/kms/) to manage encryption keys, which provides additional security benefits including separate permissions for the master key, a number of different encryption algorithms (including [RSA](https://hackernoon.com/how-does-rsa-work-f44918df914b)) and an audit trail. This option supports efforts to comply with [PCI-DSS](https://www.pcicomplianceguide.org/faq/), [HIPAA/HITECH](https://cpl.thalesgroup.com/faq/americas-compliance/what-hipaa-hitech) and [FedRAMP](https://www.fedramp.gov).
Glacier and Glacier Deep Archive storage classes are encrypted at rest by default, whereas with the other classes encryption at rest is optional.

## Pricing
S3 is priced by usage, with each tier priced slightly differently. The service is billed on a number of factors:
 * Storage - billed per GB (Generally the highest cost of using the service)
 * Requests and data retrievals
 * Data transfer
 * Management and replication
AWS offers a [Free Usage Tier](https://aws.amazon.com/free/) for every month for the first year in all regions except GovCloud, which includes
 * 5GB storage
 * 20,000 GET requests
 * 2,000 PUT requests
 * 15GB data transfer out

Additionally, buckets accessed from another AWS account can be set up to charge the requester rather than the host.

## Additional Functionality
### Transfer Acceleration
S3 Transfer Acceleration makes use of [Amazon Cloudfront's](https://aws.amazon.com/cloudfront) global Edge Locations, by optimizing the delivery path, with some customers reporting up to 500% improvement in transfer speeds.

### Event Notifications
S3 can be used as part of a pipeline, triggering actions based on requests like PUT, POST, DELETE or COPY. These triggers can be sent through to other services including [Lambda](https://aws.amazon.com/lambda/), [SNS](https://aws.amazon.com/sns/) or [SQS](https://aws.amazon.com/sqs/).

### Query in Place
Running sophisticated querying against data stored in S3 buckets is provided using [S3 Select](https://aws.amazon.com/blogs/aws/s3-glacier-select/), [Amazon Athena](https://aws.amazon.com/athena/) and [Amazon Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-getting-started-using-spectrum.html).

### Storage Class Analysis
Storage Class Analysis policy analyzes storage patterns in order to identify infrequent access patterns to transfer between different storage classes. It can be applied to an entire bucket, a prefix or an object tag. When an infrequent access pattern is identified, a Lifecycle age policy can be used to move the identified objects to a lower storage class, reducing the cost.

### Inventory
Inventory provides a scheduled alternative to the List functionality of S3 to provide a CSV, ORC or Apache Parquet file listing the objects and their metadata on a daily or weekly basis for a given prefix or a whole bucket. A common use of this is to verify encryption and replication required for business, compliance or regulatory needs.

### Object Locking
Object Lock is a feature that prevents the deletion of a version of an object in a given retention period in order to provide added data protection and to help meet regulatory compliance. This is done by applying either a Retain Until Date or a Legal Hold to the object - the difference in the two is that with the latter, the protection must be manually removed, whereas applying a Retain Until Date allows the protection to expire. Object locking features two different operation modes:
 * Governance, which allows users with specific permissions to remove the protection from an object.
 * Compliance, where no-one can remove the protection.

### Batch Operations
Batch Operations allow you to perform large-scale batch operations on S3 objects, such as updating acess control lists (ACLs), copying objects, updating object tags or triggering Lambda functions.

## Common Use Cases
 * Backup and File Storage
 * Application hosting (An example of this is [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
 * Media hosting (such as using a presigned URL to securely serve images or videos within a web app)
 * Software/File hosting for others to download (An example of this use is with [BitTorrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/S3TorrentPublish.html)

## Code Snippets
```python
import boto3

client = boto3.client('s3')
resource = boto3.resource('s3')
BUCKET_NAME = 'my-bucket'
OBJECT_KEY = 'my-object'
OBJECT_BODY = b'my contents'

bucket_create_response = client.create_bucket(
    ACL = 'public-read',
    Bucket = BUCKET_NAME,
    CreateBucketConfiguration = {
        'LocationConstraint': 'eu-west-1'
    },
)

list_response = client.list_buckets()

if BUCKET_NAME in list_response:

    put_object_response = client.put_object(
        Bucket = BUCKET_NAME,
        Body = OBJECT_BODY,
        ContentLength = len(OBJECT_BODY)
        ServerSideEncryption = 'AES256',
        ObjectLockMode = 'COMPLIANCE',
        ContentType = 'application/json',
        Key = OBJECT_KEY
    )

    list_objects_response = client.list_objects(
        Bucket = BUCKET_NAME,
        Key = OBJECT_KEY
    )

    get_object_response = client.get_object(
        Bucket = BUCKET_NAME,
        Key = OBJECT_KEY
    )

    return get_object_response
```
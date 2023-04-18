-

## AWS Account Settings
Before deploying Qrvey Platform, please check the following in your AWS account to make sure the following are available:

* We recommend for our default trial configuration to use the Default VPC with at least 2 public subnets for each availability zone of that region. If you require the use of a non-default VPC or other private subnet configurations, let us know and we can help you with this configuration.
* Deployment creates about 2 t2.micro EC2 instances. The default service quota limit for AWS accounts is 20 but in some cases, it might be 5.
* Ensure there are at least 24 S3 buckets available. (AWS sets a default limit of 100, you may need to increase the limit in your account.)
* If you are using a new AWS account, please confirm the Service Quota for AWS Lambda  Concurrent executions. Usually the Applied Quota Value is set to 1,000, but, in some new accounts, it’s set to 10. Qrvey deployment requires the limit to be at least 100, but 800+ is recommended. Also, we have noticed that when Concurrent executions are limited to 10, the Max memory size is also limited to 3,008MB while the default is 10,240MB. Please contact AWS support to get these limits increased before performing the install. 
* For some new accounts, we have seen that the number of Concurrent Code builds is set to 1, which results in the installer taking longer than expected.



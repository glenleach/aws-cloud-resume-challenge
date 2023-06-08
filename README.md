AWS Cloud Resume Challenge
==========================

Welcome to the AWS Cloud Resume Challenge!  [The AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) is designed to help you showcase your skills in building and deploying a web application using various AWS services. By completing this challenge, you'll not only demonstrate your technical abilities but also create a personal resume website hosted on AWS.

# **Architecture**

![AWS Cloud resume challenge](https://github.com/glenleach/aws-cloud-resume-challenge/assets/128903526/f9f58f64-502f-4ef3-b389-74ebd41fa8a9)

Challenge Overview
------------------

The challenge involves building a web application that consists of a static website and a serverless backend using AWS services such as Amazon S3, AWS Lambda, and Amazon DynamoDB. The website should display your resume information, and the backend should handle form submissions from the website.

Prerequisites
-------------

Before starting the challenge, ensure that you have the following:

*   An AWS account: You'll need an AWS account to create and configure the necessary resources for the challenge.
*   AWS CLI (Command Line Interface): Install the AWS CLI on your local machine to interact with AWS services from the command line.
*   AWS SAM CLI (Serverless Application Model): Install the AWS SAM CLI to develop, test, and deploy serverless applications locally and on AWS.

Getting Started
---------------

Here's a step-by-step guide to help you get started with the AWS Cloud Resume Challenge:

1. Define the project scope: Determine the features you want to include in your resume 
website. Think about the sections you want to display, such as education, work 
experience, projects, skills, etc.

2. Design your resume website: Create a basic HTML/CSS template for your resume 
website. You can use any design framework or start from scratch. Keep it simple and 
professional.

3. Choose your AWS services: Decide which AWS services you want to use for hosting, 
storage, and deployment. The typical services used in the challenge include AWS S3, 
AWS CloudFormation, AWS Lambda, and Amazon API Gateway. You may also consider 
using AWS Route 53 for DNS management.

4. Set up AWS CLI: Install the AWS Command Line Interface (CLI) on your local machine if 
you haven't already. The AWS CLI allows you to interact with AWS services from your command line.

5. Create an S3 bucket: Create an S3 bucket to host your resume website files. Use the AWS 
CLI or AWS Management Console to create the bucket.

6. Upload your website files: Upload your HTML, CSS, and other assets to the S3 bucket. 
Make sure to set the correct permissions so that the objects are publicly accessible.

7. Configure static website hosting: Enable static website hosting on your S3 bucket. This 
allows AWS to serve your website directly from the bucket.

8. Test your website: Access the website using the S3 bucket's endpoint URL. Verify that 
your website is functioning as expected.

9. Create a CloudFormation template: Create an AWS CloudFormation template to define 
the infrastructure resources required for your website. This includes Lambda functions, 
API Gateway, and any other necessary resources.

10. Deploy the CloudFormation stack: Use the AWS CLI or AWS Management Console to 
deploy the CloudFormation stack based on your template. This will create the 
infrastructure resources required for your website.

11. Test your deployed website: Access the website using the CloudFormation-created API 
Gateway endpoint URL. Verify that everything is working correctly.

12. Custom domain (optional): If you want to use a custom domain for your resume website, 
you can set it up using AWS Route 53 or another domain registrar. Configure DNS 
settings to point your domain to the CloudFormation-created API Gateway endpoint.

13. Continuously improve and update: Once your website is up and running, you can 
continue to improve it by adding more features, refining the design, or integrating 
additional AWS services.






    
Regenerate response
    

Resources
---------


*   [AWS Documentation](https://aws.amazon.com/documentation/): The official AWS documentation provides detailed information about the various AWS services you'll be using in the challenge.
*   [AWS CLI Documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html): The documentation for the AWS CLI guides you on how to interact with AWS services from the command line.
*   [AWS SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html): The AWS SAM CLI documentation explains how to develop, test, and deploy serverless applications using the Serverless Application Model.

Conclusion
----------
Remember to refer to the official AWS documentation for detailed information on each
service and how to use them. The AWS Cloud Resume Challenge is a great opportunity to
learn and showcase your skills with AWS services. By completing this challenge, 
you'll gain hands-on experience with various AWS services and showcase your abilities to potential employers or clients. 
Good luck, and happy building!

AWS Cloud Resume Challenge
==========================

Welcome to the AWS Cloud Resume Challenge!  [The AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/) is designed to help you showcase your skills in building and deploying a web application using various AWS services. By completing this challenge, you'll not only demonstrate your technical abilities but also create a personal resume website hosted on AWS. The project was published by Forrest Brazeal.

# **Architecture**

![AWS Cloud resume challenge](https://github.com/glenleach/aws-cloud-resume-challenge/img/AWS-Cloud-resume-challenge.png)

Challenge Overview
------------------

The challenge involves building a web application that consists of a static website and a serverless backend using AWS services such as Amazon S3, AWS Lambda, and Amazon DynamoDB. The website should display your resume information, and the backend should handle form submissions from the website.

Prerequisites
-------------

Before starting the challenge, ensure that you have the following:

*   An AWS account: You'll need an AWS account to create and configure the necessary resources for the challenge.
*   AWS CLI (Command Line Interface): Install the AWS CLI on your local machine to interact with AWS services from the command line.
*   AWS SAM CLI (Serverless Application Model): Install the AWS SAM CLI to develop, test, and deploy serverless applications locally and on AWS.

Getting Started Guide for AWS Cloud Resume Challenge
----------------------------------------------------

In this guide, we will walk you through the process of setting up the challenge using the following tools:

1.  S3 (Simple Storage Service):

    *   Create an S3 bucket to store your static website files. Make sure to enable static website hosting and note down the endpoint URL.
2.  AWS CloudFront:

    *   Create a CloudFront distribution and configure it to use your S3 bucket as the origin. This will provide a global Content Delivery Network (CDN) for your website and improve performance.
3.  Certificate Manager:

    *   Obtain an SSL/TLS certificate for your domain using AWS Certificate Manager (ACM). This will enable HTTPS for your website and ensure secure communication.
4.  AWS Lambda:

    *   Set up an AWS Lambda function to generate dynamic content for your resume, such as retrieving data from a DynamoDB table. Write the necessary code in the language of your choice, and make sure to test it before proceeding.
5.  DynamoDB:

    *   Create a DynamoDB table to store your resume data. Define the necessary attributes for your resume, such as name, experience, skills, etc. Populate the table with sample data to start with.
6.  GitHub Actions:

    *   Set up a GitHub repository to host your code. Create a workflow using GitHub Actions to automatically deploy your application whenever you push changes to the repository. Include the necessary steps to build and deploy your code to AWS.
7.  Terraform:

    *   Use Terraform to define your infrastructure as code. Create a Terraform configuration file that includes the necessary resources, such as S3 bucket, CloudFront distribution, Lambda function, DynamoDB table, etc. Use Terraform commands to deploy your infrastructure to AWS.

Once you have set up the above tools, follow these steps to complete the AWS Cloud Resume Challenge:

1.  Build your static website:

    *   Create a basic HTML/CSS resume template or use an existing one.
    *   Customize the template with your resume information and design.
    *   Upload the static files to your S3 bucket.
2.  Implement dynamic content:

    *   Modify your HTML/CSS files to incorporate dynamic content.
    *   Use JavaScript or any other preferred language to make API calls to your Lambda function and retrieve data from DynamoDB.
    *   Update your Lambda function code to return the requested resume data.
3.  Test your application:

    *   Access your website through the CloudFront endpoint URL and ensure that both static and dynamic content is displayed correctly.
    *   Verify that the data is retrieved from DynamoDB and displayed on your website.
4.  Continuously deploy changes:

    *   Make updates to your code or resume data in the GitHub repository.
    *   Commit and push the changes to trigger the GitHub Actions workflow.
    *   Verify that the changes are automatically deployed to AWS and reflect on your website.

By following this guide, you will have a fully functional AWS Cloud Resume Challenge solution using S3, AWS CloudFront, Certificate Manager, AWS Lambda, DynamoDB, GitHub Actions, and Terraform.






    
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

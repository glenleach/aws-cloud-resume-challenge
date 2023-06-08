AWS Cloud Resume Challenge
==========================

Welcome to the AWS Cloud Resume Challenge! This challenge is designed to help you showcase your skills in building and deploying a web application using various AWS services. By completing this challenge, you'll not only demonstrate your technical abilities but also create a personal resume website hosted on AWS.

Architecture
![AWS Cloud resume challenge](https://github.com/glenleach/aws-cloud-resume-challenge/assets/128903526/f9f58f64-502f-4ef3-b389-74ebd41fa8a9)

Challenge Overview
------------------

The challenge involves building a web application that consists of a static website and a serverless backend using AWS services such as Amazon S3, Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The website should display your resume information, and the backend should handle form submissions from the website.

Prerequisites
-------------

Before starting the challenge, ensure that you have the following:

*   An AWS account: You'll need an AWS account to create and configure the necessary resources for the challenge.
*   AWS CLI (Command Line Interface): Install the AWS CLI on your local machine to interact with AWS services from the command line.
*   AWS SAM CLI (Serverless Application Model): Install the AWS SAM CLI to develop, test, and deploy serverless applications locally and on AWS.

Getting Started
---------------

To begin the challenge, follow these steps:

1.  Fork the AWS Cloud Resume Challenge repository: Start by forking the official [AWS Cloud Resume Challenge repository](https://github.com/glenleach/aws-cloud-resume-challenge) on GitHub. This repository contains a sample project structure and code to help you get started.
    
2.  Set up the project locally: Clone the forked repository to your local machine and navigate to the project directory. Review the project structure and sample code provided. The `template.yaml` file defines the AWS resources required for the backend, and the `index.html` file contains the initial HTML structure for the resume website.
    
3.  Customize the resume website: Open the `index.html` file in a text editor and modify it to reflect your own resume information. Update the HTML, CSS, and JavaScript code as needed to create your personal resume website.
    
4.  Develop the serverless backend: Update the code in the `app.py` file to handle form submissions from the website. This code will be executed by AWS Lambda functions triggered by Amazon API Gateway.
    
5.  Deploy the application: Use the AWS SAM CLI to package and deploy your application to AWS. This will create the necessary AWS resources, including S3 buckets, Lambda functions, API Gateway endpoints, and DynamoDB tables.
    
6.  Test the application: Once the application is deployed, test it by visiting the website and submitting the form. Verify that the form data is stored correctly in DynamoDB.
    
7.  Optional: Enhance the application: If you want to go the extra mile, you can add additional features or improve the user experience of your application. Some ideas include adding authentication, integrating with other AWS services, or optimizing the website for performance.
    
8.  Cleanup: When you're finished with the challenge, clean up the AWS resources to avoid incurring any additional costs.
    

Resources
---------

*   [AWS Cloud Resume Challenge Repository](https://github.com/aws-samples/aws-cloud-resume-challenge): The official repository containing the challenge instructions, sample code, and project structure.
*   [AWS Documentation](https://aws.amazon.com/documentation/): The official AWS documentation provides detailed information about the various AWS services you'll be using in the challenge.
*   [AWS CLI Documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html): The documentation for the AWS CLI guides you on how to interact with AWS services from the command line.
*   [AWS SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html): The AWS SAM CLI documentation explains how to develop, test, and deploy serverless applications using the Serverless Application Model.

Conclusion
----------

The AWS Cloud Resume Challenge is an excellent opportunity to demonstrate your AWS skills while creating a personal resume website. By completing this challenge, you'll gain hands-on experience with various AWS services and showcase your abilities to potential employers or clients. Good luck, and happy building!

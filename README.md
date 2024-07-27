# React Application with CI/CD and AWS Deployment
This project demonstrates a scalable React application designed with modern web development practices. It integrates seamlessly with a CI/CD pipeline to ensure continuous delivery via CircleCI. The application is deployed on AWS, leveraging various AWS services to achieve high availability and optimal performance. End-to-end testing is implemented using Cypress, with tests automated within the CI pipeline and recordings available for thorough test run analysis and debugging.

## Technologies Used
- **React** - Frontend library for building user interfaces
- **CircleCI** - Continuous integration and delivery platform
- **AWS S3** - Object storage for static site hosting
- **AWS CloudFront** - Content delivery network (CDN) for fast and secure distribution
- **AWS Route 53** - Scalable domain name system (DNS) web service
- **CYPRESS E2E** - End-to-end testing framework

## Features

- Modern React Movie application with a responsive design
- Continuous integration with automated testing and deployment using CircleCI for development, staging and production environments
- Automated Cypress tests for reliable and maintainable end-to-end testing integrated in CircleCI with Cypress Cloud recording enabled for comprehensive test run visibility and debugging
- CircleCI job success/failure notification with detailed information sent to Slack.
- High availability and performance with AWS S3 and CloudFront
- Custom domain management with AWS Route 53


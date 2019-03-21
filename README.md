#### Personal development dashboard

The goal of this project is to learn how to create a personal dashboard. 

Why ? Well, to keep on learning React, but first and foremost, now practice API calls and user authentication.

For this I'll be using this technology stack : 

- React for front-end development paired with [Semantic UI](https://react.semantic-ui.com/)
- [AWS Cognito](https://aws.amazon.com/cognito/), for user authentication
- [Amplify](https://aws-amplify.github.io/docs/js/react) framework, to talk to Cognito 

##### Here's a quick guide to get set-up with AWS Cognito and [Amplify](https://aws-amplify.github.io/docs/js/react) : 

- Firs create an AWS account and then install [Amplify for React](https://aws-amplify.github.io/docs/js/react)
- Configure Amplify to link it to your AWS account
- Install and save the following modules : aws-amplify, aws-amplify-react
- Run `amplify init`, to intialize Amplify for this project
- Run `amplify add auth`, and follow instructions that are prompted to add authentication
- After these two commands, you need to push your changes to the cloud using : `amplify push`
This will create an aws-exports file containing Cognito user pool information. Now, if you go to your Cognito console, then to "Your User Pools", you will see the pool that has just been created.
- Finally you can test the login and sign-up form using the "withAuthenticator" wrapper around your component. 
If you start your application, you will be prompted with a login form and you can sign-up to create a new user in your pool (take a look at the instructions on the Amplify for react page).


Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

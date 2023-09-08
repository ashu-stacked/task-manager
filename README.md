# Task Manager App

## Overview

The Task Manager App is a full-stack web application for managing tasks. It's built using React.js and Redux.js for the frontend, Koa.js for the backend, and PostgreSQL as the database. The app offers user authentication, JWT token-based authorization, and various features for creating, listing, updating, and managing tasks.

## Features

- **User Authentication**: Users can sign up and sign in securely.
- **JWT Token**: JSON Web Tokens are used for authentication and authorization.
- **User Creation**: Registered users can create tasks.
- **Protected Routes**: Certain routes are protected and accessible only for authenticated users.
- **Task Management**: Users can create, view, update, and delete their tasks.
- **Logout**: Provides an option for users to log out securely.
- **Database**: PostgreSQL is used to store user accounts and tasks.

## Technologies Used

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Redux.js**: A state management library for managing application state.
- **React Router**: For routing and navigation.
- **Fetch**: A HTTP client for making API requests.

### Backend

- **Koa.js**: A lightweight web framework for Node.js.
- **JSON Web Tokens (JWT)**: For secure authentication and authorization.
- **PostgreSQL**: A relational database for storing user accounts and tasks.

## Getting Started

Follow these steps to set up and run the Task Manager App on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

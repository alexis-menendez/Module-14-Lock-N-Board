# Module 14: lock-n-board
Authentication with JSON Web Tokens (JWTs) is important for full-stack applications. It provides a secure way to verify user identities. JWTs are small, URL-safe tokens that store authentication data, allowing servers to verify users. They can also store extra information and be easily checked for security.

# Kanban Board Authentication Challenge
Your task this week is to add JWT authentication to an existing Kanban board application. The app is already built, but you need to:
- Complete the login page UI.
- Add JWT authentication to the server API.
- Deploy the full application to Render.

# Getting Started
1. Download and unzip the starter code.
2. Create a new GitHub repository with the starter code.

# User Story
As a member of an agile team, I want a Kanban board with a secure login page so that I can securely access and manage my tasks.

# Requirements

## Login Page
The login page must have fields for username and password.
When users enter valid credentials, they should be authenticated with JWT and redirected to the Kanban board.
If credentials are invalid, an error message should appear.
Upon successful login, the JWT should be stored in local storage for future authenticated requests.
When users log out, the JWT should be removed, and they should be redirected to the login page.
If a user tries to access the Kanban board without authentication, they should be redirected to the login page.
If the user is inactive for a set time, their session should expire, and they should be redirected to the login page.

# Steps to Implement

## Set Up Environment Variables


Create a .env file for the server.
Add a database username and password.
Add a secret key for JWT authentication.

## Complete the Authentication Code


Implement the authenticateToken method in server/src/middleware/auth.ts.
Complete the login method in server/src/routes/auth-routes.ts.
Secure API routes in server/src/routes/index.ts.

## Update the Client-Side Code


Complete the login method in client/src/api/authAPI.tsx.
Implement authentication logic in client/src/utils/auth.ts.

## Test the API


Use Insomnia to test the server API.
Import the provided JSON file into Insomnia to simplify testing.

## Deploy the Application


Follow the Render Deployment Guide to deploy both the front-end and back-end.

# Bonus Task
Add sorting and filtering features to the Kanban board.

# Grading Criteria

## Technical (40%)
The server correctly verifies login requests, creates JWTs, and validates API requests.
The client stores JWTs in local storage and includes them in API requests.
The application is successfully deployed.

## Deployment (32%)
The application is live with no errors.
A GitHub repository with the full application code is submitted.

## Application Quality (15%)
The user experience is intuitive.
The UI is clean and functional.
The app matches the provided mock-up.

## Repository Quality (13%)
The repository follows best practices for structure, naming, and organization.
Commit messages are clear and descriptive.
The README includes a project description, screenshot, and deployment link.

## Bonus (Up to 10 points)
Sorting functionality (5 points).
Filtering functionality (5 points).

# Submission Instructions

## Submit both:
The URL of the deployed application.
The GitHub repository URL with a README.
You are allowed to miss up to two Challenge assignments and still receive your certificate. If you need help, use student support services like live chat, office hours, and tutoring.
If you use code from external sources or collaborate with others, note it in your README to avoid plagiarism issues.


# SchoolTouch — Frontend

React frontend for SchoolTouch, a role-based school management application for administrators, teachers, students, and parents.

## Features represented in the application

- Role-specific dashboards and academic workflows
- Timetables, attendance, homework, study materials, exams, and results
- Fees and announcements
- Communication features powered by the backend and Socket.IO

## Tech stack

- React 19 with Create React App
- React Router
- Axios
- Socket.IO Client
- React Big Calendar
- Tailwind CSS

## Run locally

Requires Node.js and npm.

From the repository root:

```bash
cd client
npm install
npm start
```

The development server normally opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm start   # Start the development server
npm test    # Run tests
npm run build  # Create a production build
```

## Backend

The frontend expects the SchoolTouch API to be running. Follow the setup steps in the [root README](../README.md) to configure MongoDB and start the server.

## Development note

This project is still evolving. Confirm API URLs and role-specific flows against the running backend when setting up a fresh environment.

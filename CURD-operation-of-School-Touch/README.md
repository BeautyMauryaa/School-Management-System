# SchoolTouch CRUD API

A small Node.js/Express backend project for practicing CRUD-style school management APIs with MongoDB and Mongoose. The repository contains route, controller, model, middleware, and database connection code.

## Tech stack

- Node.js and Express
- MongoDB with Mongoose
- JWT and bcrypt-based authentication utilities
- dotenv for local configuration
- express-validator for request validation

## Run locally

Requires Node.js, npm, and a MongoDB instance.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the repository root:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/schooltouch
   JWT_SECRET=replace-with-a-long-random-secret
   ```

   Use your own database URI and a unique secret. Do not commit `.env`.

3. Start the server:

   ```bash
   npm run dev
   ```

   Or use `npm start` for a regular Node.js run.

The API defaults to port 5000. Route paths and implemented behavior are defined in `routes/` and `controllers/`; check those files before relying on any endpoint.

## Repository structure

- `server.js` — Express application and route registration
- `db.js` — MongoDB connection helper
- `routes/` — API route modules
- `controllers/` — request handlers
- `models/` — Mongoose schemas
- `middleware/` — authentication and error handling helpers
- `utils/` — supporting utilities

## Status

This is a learning/implementation repository, not a claim of production readiness. The package currently uses a placeholder test script, so automated tests still need to be added.

## Author

**Beauty Mauryaa** · [GitHub](https://github.com/BeautyMauryaa)

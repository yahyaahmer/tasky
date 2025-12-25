# tasky

tasky is a full-stack task management application built using the **MERN stack**.  
It features **JWT-based authentication**, **protected routes**, and **user-specific tasks**.

---

## Features

- User registration & login (JWT Authentication)
- Protected API routes
- Create, read & delete tasks
- User-specific data isolation
- Modern light UI
- RESTful API architecture

---

## Tech Stack

**Frontend**
- React (Create React App)
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt.js

---

## Project Structure

tasky/  
    ├── client/ # React frontend  
    ├── server/ # Express backend  
    ├── .gitignore  
    └── README.md

---

## Environment Variables

Create a `.env` file inside `server/`:  
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret

---

## Run Locally

### Clone the repository

    git clone https://github.com/yahya-ahmer/tasky.git
    cd tasky


### Backend setup

    cd server
    npm install
    npm run dev

### Frontend setup

    cd client
    npm install
    npm start

Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000


API Endpoints:

    Auth:
    POST /api/auth/register
    POST /api/auth/login

    Tasks (Protected):
    GET /api/tasks
    POST /api/tasks
    DELETE /api/tasks/:id


What I Learned:

- Implementing JWT-based authentication
- Securing REST APIs with middleware
- Structuring a MERN project professionally
- Managing frontend & backend integration


Author:

Yahya Ahmer
GitHub: https://github.com/yahyaahmer

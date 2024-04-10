# EXPENSE_HUB

ExpenseHub is a comprehensive Expense Tracker App developed using Node.js and Express.js for the backend and React.js for the frontend. It allows users to efficiently manage their expenses by providing features such as adding, editing, and deleting transactions, as well as viewing analytics for better financial insights.

Backend:

Dependencies:
express: Framework for building web applications in Node.js.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
dotenv: Loads environment variables from a .env file into process.env.
morgan: HTTP request logger middleware for Node.js.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
Script Commands:
start: Starts the server using node server.js.
server: Starts the server using nodemon server.js for automatic server restarts during development.
Connection to MongoDB:
The Connect_db function in config/Connect_db.js establishes a connection to MongoDB using Mongoose.
Frontend:

Dependencies:
vite: Next-generation frontend tooling for Vue.js and React.js projects.
Script Commands:
frontend: Starts the frontend server using npm start in the frontend directory.
React Components and Functionality:
The frontend components and functionality are not explicitly provided in the code snippet but are expected to include components for adding, editing, and deleting transactions, as well as displaying analytics.
General:

Package.json:
Contains metadata and project dependencies for both the backend and frontend.
Port Configuration:
The server listens on the port specified in the PORT environment variable or defaults to port 5000.
API Routes:
The backend defines routes for user authentication (/api/v1/user) and transaction management (/api/v1/transaction).

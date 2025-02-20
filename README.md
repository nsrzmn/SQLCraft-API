SQLCraft-API
A RESTful API built with Node.js (TypeScript) & Sequelize ORM, implementing CRUD operations for users, posts, and comments.
Supports JWT authentication and role-based authorization.

🚀 Features
✅ User Registration & Login (JWT Authentication)
✅ CRUD operations for Users, Posts, and Comments
✅ Sequelize ORM for MySQL/PostgreSQL
✅ Role-based Access Control (RBAC) (optional for admins)
✅ API versioning (v2 for improved structure)
✅ Soft Delete Support (paranoid: true) for Users, Posts & Comments
✅ Postman API Documentation Available

📖 API Documentation
Full API documentation is available on Postman:
📌 View API Documentation

🛠 API Endpoints
🔐 Authentication APIs
Method	Endpoint	Description
POST	/api/v2/auth/register	Register a new user
POST	/api/v2/auth/login	Login user & get JWT token
👤 User APIs
Method	Endpoint	Description
GET	/api/v2/users	Get all users
GET	/api/v2/users/:id	Get a user by ID
PATCH	/api/v2/users/:id	Update user details
DELETE	/api/v2/users/:id	Soft delete a user (paranoid delete)
📝 Post APIs
Method	Endpoint	Description
POST	/api/v2/posts	Create a new post
GET	/api/v2/posts	Get all posts
GET	/api/v2/posts/:id	Get a post by ID
PATCH	/api/v2/posts/:id	Update a post
DELETE	/api/v2/posts/:id	Soft delete a post (paranoid delete)
💬 Comment APIs
Method	Endpoint	Description
POST	/api/v2/comments	Create a comment
GET	/api/v2/comments/:postId	Get all comments for a specific post
PATCH	/api/v2/comments/:id	Update a comment
DELETE	/api/v2/comments/:id	Soft delete a comment (paranoid delete)
🔑 Authentication & Authorization
All endpoints (except register & login) require a JWT token.
Users can only modify/delete their own content.
Admin users can manage all users, posts, and comments.
📌 Example Request (Authentication)
Login to get a Token
http
Copy
Edit
POST /api/v2/auth/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
Response
json
Copy
Edit
{
    "statusCode": 200,
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1..."
}
Using Token in Requests
http
Copy
Edit
GET /api/v2/users
Authorization: Bearer YOUR_ACCESS_TOKEN
🔧 Setup & Installation
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/SQLCraft-API.git
cd SQLCraft-API
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file and add:

ini
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_NAME=sqlcraft
DB_USER=root
DB_PASS=password
JWT_SECRET=your_secret_key
4️⃣ Run Database Migrations
sh
Copy
Edit
npx sequelize-cli db:migrate
5️⃣ Start the Server
sh
Copy
Edit
npm run dev
🚀 The API will run on http://localhost:5000/api/v2

🛠 Technologies Used
Node.js (with TypeScript)
Express.js (Fast & minimal backend framework)
Sequelize ORM (MySQL/PostgreSQL)
JWT Authentication (Secure API auth)
Postman (API Testing & Documentation)
🔍 Future Enhancements
✅ Implement Role-Based Access Control (RBAC)
✅ WebSockets for Real-time Commenting
✅ Rate Limiting & Security Enhancements
✅ GraphQL API Support

📌 Contributors
👨‍💻 Your Name - GitHub Profile

💡 Open to collaborations & PRs!

📜 License
This project is licensed under the MIT License.
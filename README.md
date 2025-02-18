# SQLCraft-API
A basic REST API using Node.js (TS) & Sequelize, implementing CRUD operations for users & posts.

## 🚀 Features:
- ✅ User Registration & Login (JWT Authentication)
- ✅ CRUD operations for Users, Posts & Comments
- ✅ Sequelize ORM for MySQL/PostgreSQL

---

## 📖 API Documentation
The full API documentation is available on **Postman**:  
📌 [View Documentation Here](https://documenter.getpostman.com/view/38742281/2sAYXFjdfT)

---

## 🛠 API Endpoints

### 🔐 Authentication APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login user & get JWT token |
| `POST` | `/api/auth/logout` | Logout user (optional) |

### 👤 User APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/users` | Get all users |
| `GET` | `/api/users/:id` | Get user by ID |
| `PUT` | `/api/users/:id` | Update user |
| `DELETE` | `/api/users/:id` | Delete user |

### 📝 Posts APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/posts` | Create a new post |
| `GET` | `/api/posts` | Get all posts |
| `GET` | `/api/posts/:id` | Get post by ID |
| `PUT` | `/api/posts/:id` | Update post |
| `DELETE` | `/api/posts/:id` | Delete post |

### 💬 Comments APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/comments` | Create a comment |
| `GET` | `/api/posts/:id/comments` | Get all comments for a post |
| `PUT` | `/api/comments/:id` | Update a comment |
| `DELETE` | `/api/comments/:id` | Delete a comment |

---

## 🔑 Authentication & Authorization
- All endpoints (except registration & login) require a **JWT token**.
- Use the token in the `Authorization` header:  
Authorization: Bearer YOUR_ACCESS_TOKEN

yaml
Copy
Edit

---

## 🛠 Setup & Run Locally
### 📌 Install dependencies:
```bash
npm install
🚀 Run the server:
bash
Copy
Edit
npm run dev
⚙️ Environment Variables (Example .env)
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
JWT_SECRET=mysecretkey
✅ Testing the API
Use Postman or Thunder Client to test API endpoints with the provided documentation.

📜 License
This project is licensed under the MIT License.

📩 Contact
For questions or issues, feel free to reach out! 😊

yaml
Copy
Edit

---

### 🚀 **How to Use This?**
1. **Copy** the code above.
2. **Paste** it into your `README.md` file.
3. **Save & Push** it to GitHub:
   ```bash
   git add README.md
   git commit -m "Updated API documentation"
   git push origin main
# **SQLCraft-API**
A **RESTful API** built with **Node.js (TypeScript)** & **Sequelize ORM**, implementing **CRUD operations** for users, posts, and comments.  
Supports **JWT authentication** and **role-based authorization**.

---

## **🚀 Features**
✅ **User Registration & Login (JWT Authentication)**  
✅ **CRUD operations** for Users, Posts, and Comments  
✅ **Sequelize ORM** for **MySQL/PostgreSQL**  
✅ **Role-based Access Control (RBAC)** *(optional for admins)*  
✅ **API versioning (`v2` for improved structure)**  
✅ **Soft Delete Support (`paranoid: true`) for Users, Posts & Comments**  
✅ **Postman API Documentation Available**  

---

## **📖 API Documentation**
Full API documentation is available on **Postman**:  
📌 **[View API Documentation](https://documenter.getpostman.com/view/38742281/2sAYXFjdfT)**  

---

## **🛠 API Endpoints**
### **🔐 Authentication APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v2/auth/register` | Register a new user |
| `POST` | `/api/v2/auth/login` | Login user & get JWT token |

---

### **👤 User APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/v2/users` | Get all users |
| `GET` | `/api/v2/users/:id` | Get a user by ID |
| `PATCH` | `/api/v2/users/:id` | Update user details |
| `DELETE` | `/api/v2/users/:id` | Soft delete a user (paranoid delete) |

---

### **📝 Post APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v2/posts` | Create a new post |
| `GET` | `/api/v2/posts` | Get all posts |
| `GET` | `/api/v2/posts/:id` | Get a post by ID |
| `PATCH` | `/api/v2/posts/:id` | Update a post |
| `DELETE` | `/api/v2/posts/:id` | Soft delete a post (paranoid delete) |

---

### **💬 Comment APIs**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/v2/comments` | Create a comment |
| `GET` | `/api/v2/comments/:postId` | Get all comments for a specific post |
| `PATCH` | `/api/v2/comments/:id` | Update a comment |
| `DELETE` | `/api/v2/comments/:id` | Soft delete a comment (paranoid delete) |

---

## **🔑 Authentication & Authorization**
- All endpoints **(except register & login)** require a **JWT token**.
- Users can **only modify/delete their own content**.
- Admin users can **manage all users, posts, and comments**.


## **🛠 Technologies Used**
- **Node.js** (with TypeScript)  
- **Express.js** (Fast & minimal backend framework)  
- **Sequelize ORM** (MySQL/PostgreSQL)  
- **JWT Authentication** (Secure API auth)  
- **Postman** (API Testing & Documentation)  

---

## **🔍 Future Enhancements**
✅ **Implement Role-Based Access Control (RBAC)**  
✅ **WebSockets for Real-time Commenting**  
✅ **Rate Limiting & Security Enhancements**  
✅ **GraphQL API Support**  

---

## **📌 Contributors**
👨‍💻 **Nasir Zaman** - [GitHub Profile](https://github.com/nsrzmn)  

💡 Open to **collaborations & PRs**!

---

## **📜 License**
This project is licensed under the **MIT License**.

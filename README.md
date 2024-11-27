# 🔐 VRV Security RBAC Backend Assignment  

Welcome to the **VRV Security RBAC Backend Assignment**!  
This project demonstrates a robust implementation of **Role-Based Access Control (RBAC)** for securing APIs with granular role permissions. 🎯

---

## 🌟 Features  

✨ **Secure Authentication and Authorization**  
- Implemented a robust system using:  
  - **Password Hashing**: Protects user credentials using `bcryptjs`.  
  - **JWT (JSON Web Tokens)**: For secure and stateless user sessions.  
  - **Access and Refresh Tokens**: Ensures both security and session longevity.  
  - **HTTP-Only Cookies**: Adds an additional layer of security against XSS attacks.  

👥 **Role-Based Access Control (RBAC)**  
- Seamlessly manage access for different roles, including:  
  - **User**: Basic access for end-users.  
  - **Moderator**: Extended privileges to manage content and users.  
  - **Admin**: Full control over all resources and users.  

🔐 **API Security**  
- **Middleware-based Validation**: Ensures APIs are protected with role and permission checks.  
- **Error Handling**: Unified and developer-friendly error responses for quick debugging.  

⚙️ **Scalable Backend Architecture**  
- Built using **Node.js** and **Express.js**, designed for:  
  - High performance.  
  - Easy integration with frontend and third-party services.  

🛠️ **Developer-Friendly Setup**  
- Simplified installation process.  
- Intuitive and modular route structure for quick navigation and testing.  

📊 **Comprehensive Documentation**  
- Detailed API documentation with ready-to-use JSON payloads for testing in Postman.  
- Well-commented codebase to ensure easy readability and extensibility.  


---

### 📁 File Structure  

```plaintext
.
├── README.md
├── package-lock.json
├── package.json
├── src/
│   ├── config/
│   │   └── database.config.js
│   ├── controllers/
│   │   ├── admin.controller.js
│   │   ├── auth.controller.js
│   │   ├── content.controller.js
│   │   └── moderator.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   ├── models/
│   │   ├── Log.model.js
│   │   ├── content.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── admin.routes.js
│   │   ├── auth.routes.js
│   │   └── moderator.routes.js
│   ├── server.js
│   └── utils/
│       └── token.utils.js

```

## 🚀 Getting Started  

Follow these steps to run the project locally:  

---

### 1️⃣ Prerequisites  
Make sure you have the following installed on your system:  
- **Node.js** (v14 or higher)  
- **MongoDB** (local or cloud instance)  

---

### 2️⃣ Installation  

Clone the repository and install the dependencies:  


# Clone the repository
git clone https://github.com/Wizard0880/VRV_Security_RBAC_Backend_Assignment.git

# Navigate into the project directory
cd VRV_Security_RBAC_Backend_Assignment

# Install the required dependencies
npm install

### 3️⃣ Environment Variables  

Create a `.env` file in the root directory and define the following variables:  


# Server Port
PORT=8000

# MongoDB Connection String
MONGO_URI=mongodb://<username>:<password>@cluster_url/db_name

# JWT Secrets and Expiry Times
JWT_SECRET=your_secret_key
JWT_ACCESS_EXPIRY=15m      # Access token expiry time
JWT_REFRESH_EXPIRY=7d      # Refresh token expiry time

### 4️⃣ Run the Server  

Start the development server:  
npm run dev

### 📚 Dependencies  

Here’s a list of the key dependencies used:  

``plaintext
* **Express.js**: Web framework
* **Mongoose**: MongoDB ODM
* **jsonwebtoken**: For JWT-based authentication
* **dotenv**: Manage environment variables
* **bcryptjs**: Password hashing

### 📑 API Routes  

Below is the list of all the routes for this project. Each route is secured with role-based access control (RBAC). Ensure you are using the correct token for testing each route in **Postman**.  

---

### 1️⃣ **auth.routes.js**  

| Method | Endpoint             | Description                             | Required Data (JSON)                                 |
|--------|----------------------|-----------------------------------------|------------------------------------------------------|
| POST   | `/api/auth/register`  | Register a new user                     | `{ "username": "test", "password": "12345", "role": "user" }` |
| POST   | `/api/auth/login`     | Log in a user and return a JWT token    | `{ "username": "test", "password": "12345" }`        |
| POST   | `/api/auth/logout`    | Log out a user and invalidate the token | No data required (JWT token in cookies)              |
| POST   | `/api/auth/create-content` | Create new content (for authenticated users) | `{ "title": "Content Title", "body": "Content Body" }` |

### Testing Strings for **Postman**  
- **POST /api/auth/register**  
  - **Body**:  
  ``json
  {
    "username": "newuser",
    "password": "password123",
    "role": "user"
  }

### POST /api/auth/login  

**Body**:  
``json
{
  "username": "newuser",
  "password": "password123"
}

### 2️⃣ admin.routes.js  

| Method | Endpoint                        | Description                               | Required Data (JSON)                            |
|--------|---------------------------------|-------------------------------------------|-------------------------------------------------|
| GET    | `/api/admin/logs`               | Get logs of system activities             | **Headers**: `Authorization: Bearer <your_jwt_token>` |
| PUT    | `/api/admin/update-user-status` | Update status of a user (admin only)      | `{ "userId": "12345", "status": "active" }`     |
| DELETE | `/api/admin/delete-user/:userId`| Delete a user by userId (admin only)      | **Headers**: `Authorization: Bearer <your_jwt_token>` |

---

### Testing Strings for Postman  

#### **GET /api/admin/logs**  

**Headers**:  
``plaintext
Authorization: Bearer <your_jwt_token>

### 3️⃣ moderator.routes.js  

| Method | Endpoint                         | Description                           | Required Data (JSON)                                    |
|--------|----------------------------------|---------------------------------------|---------------------------------------------------------|
| GET    | `/api/moderator/pending-content` | Get all pending content for review    | **Headers**: `Authorization: Bearer <your_jwt_token>`     |
| POST   | `/api/moderator/feedback`        | Provide feedback on content           | `{ "contentId": "12345", "feedback": "Approved" }`       |

---

### Testing Strings for Postman  

#### **GET /api/moderator/pending-content**  

**Headers**:  
``plaintext
Authorization: Bearer <your_jwt_token>



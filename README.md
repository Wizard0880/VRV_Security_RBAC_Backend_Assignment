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

## 📁 File Structure  

Here’s a neat breakdown of the project’s structure:  

```plaintext
📦 VRV_Security_RBAC_Backend_Assignment
├── 📂 config              # Configuration files (e.g., database, environment variables)
│   ├── db.js             # MongoDB connection logic
│   └── dotenv.config.js  # Environment variable configuration
├── 📂 controllers         # Logic for handling API requests
│   ├── authController.js # Authentication and role assignment logic
│   └── userController.js # User management and operations
├── 📂 middleware          # Custom middleware for request handling
│   └── authMiddleware.js  # Role-based access control middleware
├── 📂 models              # Mongoose schemas
│   ├── User.js            # User model with roles and permissions
│   └── Role.js            # Role model defining access levels
├── 📂 routes              # API route definitions
│   ├── authRoutes.js      # Authentication routes
│   └── userRoutes.js      # User-related routes
├── 📂 utils               # Helper functions
│   └── errorHandler.js    # Error handling utilities
├── .env                   # Environment variables (e.g., DB connection string, secrets)
├── .gitignore             # Ignored files/folders
├── package.json           # Project metadata and dependencies
└── server.js              # Main entry point for the application

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
PORT=5000

# MongoDB Connection String
MONGO_URI=mongodb://<username>:<password>@cluster_url/db_name

# JWT Secrets and Expiry Times
JWT_SECRET=your_secret_key
JWT_ACCESS_EXPIRY=15m      # Access token expiry time
JWT_REFRESH_EXPIRY=7d      # Refresh token expiry time

### 4️⃣ Run the Server  

Start the development server:  
npm run dev


# 🔐 VRV Security RBAC Backend Assignment  

Welcome to the **VRV Security RBAC Backend Assignment**!  
This project demonstrates a robust implementation of **Role-Based Access Control (RBAC)** for securing APIs with granular role permissions. 🎯  

---

## 🌟 Features  

- ✨ **Secure Authentication and Authorization**  
  - **Password Hashing**: Protects user credentials using `bcryptjs`.  
  - **JWT (JSON Web Tokens)**: For secure and stateless user sessions.  
  - **Access and Refresh Tokens**: Ensures both security and session longevity.  
  - **HTTP-Only Cookies**: Adds an additional layer of security against XSS attacks.  

- 👥 **Role-Based Access Control (RBAC)**  
  - **User**: Basic access for end-users.  
  - **Moderator**: Extended privileges to manage content and users.  
  - **Admin**: Full control over all resources and users.  

- 🔐 **API Security**  
  - **Middleware-based Validation**: Ensures APIs are protected with role and permission checks.  
  - **Error Handling**: Unified and developer-friendly error responses for quick debugging.  

- ⚙️ **Scalable Backend Architecture**  
  - Built using **Node.js** and **Express.js**, designed for high performance and easy integration.  

- 🛠️ **Developer-Friendly Setup**  
  - Simplified installation process.  
  - Intuitive and modular route structure for quick navigation and testing.  

- 📊 **Comprehensive Documentation**  
  - Detailed API documentation with ready-to-use JSON payloads for testing in Postman.  
  - Well-commented codebase for easy readability and extensibility.  

- 📈 **Scalable Database Integration**: Efficient data storage and retrieval using MongoDB with Mongoose ODM.  
- 🌍 **Cross-Origin Resource Sharing (CORS)**: Properly configured for secure frontend-backend communication.  

---

## 🛠 Prerequisites  

- **Node.js**: v14.x or higher  
- **npm**: v6.x or higher  
- **MongoDB**: A running instance of MongoDB (local or cloud-based like Atlas)  
- **Postman**: For API testing  

---

## 📋 Environment Variables  

To run this project, you will need to add the following environment variables to your `.env` file:  
PORT=your_server_port  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
JWT_ACCESS_EXPIRY=15m  
JWT_REFRESH_EXPIRY=7d  

---

## 🚀 How to Run  

1. Clone the repository: `git clone https://github.com/Wizard0880/VRV_Security_RBAC_Backend_Assignment.git`  
2. Navigate to the project directory: `cd VRV_Security_RBAC_Backend_Assignment`  
3. Install dependencies: `npm install`  
4. Create a `.env` file in the root directory and add the required environment variables as mentioned above.  
5. Start the server: `npm start`  

---

## 📂 Project Structure  

- **routes/auth.routes.js**  
  Contains the following endpoints:  
  - `POST /register` - For user registration.  
  - `POST /login` - For user login.  
  - `POST /logout` - For logging out users.  
  - `POST /create-content` - For users to create new content.  

- **routes/admin.routes.js**  
  Contains the following endpoints:  
  - `GET /logs` - For admins to view application logs.  
  - `PUT /update-user-status` - For admins to update the status of users.  
  - `DELETE /delete-user/:userId` - For admins to delete specific users by ID.  

- **routes/moderator.routes.js**  
  Contains the following endpoints:  
  - `GET /pending-content` - For moderators to review pending content.  
  - `POST /feedback` - For moderators to provide feedback.  

---

## 🔎 Testing the API  

Use **Postman** or similar API testing tools to test the endpoints.  

1. **User Registration and Authentication**  
   - Register a new user:  
     Method: `POST`  
     Endpoint: `/register`  
     Body:  
     ```json
     {
       "fullname": "exampleUser",
       "email":"example@gmail.com",
       "password": "examplePassword",
       "role": "User"
     }
     ```  
   - Log in:  
     Method: `POST`  
     Endpoint: `/login`  
     Body:  
     ```json
     {
       "fullname": "exampleUser",
       "password": "examplePassword"
     }
     ```  
   - Log out:  
     Method: `POST`  
     Endpoint: `/logout`  

2. **Admin Endpoints**  
   - View logs:  
     Method: `GET`  
     Endpoint: `/logs`  
   - Update user status:  
     Method: `PUT`  
     Endpoint: `/update-user-status`  
     Body:  
     ```json
     {
       "userId": "user123",
       "status": "active"
     }
     ```  
   - Delete a user:  
     Method: `DELETE`  
     Endpoint: `/delete-user/:userId`  

3. **Moderator Endpoints**  
   - View pending content:  
     Method: `GET`  
     Endpoint: `/pending-content`  
   - Provide feedback:  
     Method: `POST`  
     Endpoint: `/feedback`  
     Body:  
     ```json
     {
       "contentId": "content123",
       "feedback": "Looks good!"
     }
     ```  

---

## 🛡 Security Features  

- Passwords are securely hashed using `bcryptjs`.  
- JWT-based authentication with access and refresh tokens ensures session security.  
- HTTP-only cookies protect against XSS attacks.  
- Role-based access control restricts users to authorized actions only.  

---

## 🤝 Contributing  

Contributions are welcome! Feel free to fork the repository and submit a pull request.  

---

## 📜 License  

This project is licensed under the MIT License.  

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VRV Security RBAC Backend Assignment</title>
</head>

<body>
    <h1>🔐 VRV Security RBAC Backend Assignment</h1>
    <p>Welcome to the <strong>VRV Security RBAC Backend Assignment</strong>! This project demonstrates a robust implementation of <strong>Role-Based Access Control (RBAC)</strong> for securing APIs with granular role permissions. 🎯</p>

    <hr>

    <h2>🌟 Features</h2>
    <ul>
        <li>✨ <strong>Secure Authentication and Authorization</strong>
            <ul>
                <li><strong>Password Hashing</strong>: Protects user credentials using <code>bcryptjs</code>.</li>
                <li><strong>JWT (JSON Web Tokens)</strong>: For secure and stateless user sessions.</li>
                <li><strong>Access and Refresh Tokens</strong>: Ensures both security and session longevity.</li>
                <li><strong>HTTP-Only Cookies</strong>: Adds an additional layer of security against XSS attacks.</li>
            </ul>
        </li>
        <li>👥 <strong>Role-Based Access Control (RBAC)</strong>
            <ul>
                <li><strong>User</strong>: Basic access for end-users.</li>
                <li><strong>Moderator</strong>: Extended privileges to manage content and users.</li>
                <li><strong>Admin</strong>: Full control over all resources and users.</li>
            </ul>
        </li>
        <li>🔐 <strong>API Security</strong>
            <ul>
                <li><strong>Middleware-based Validation</strong>: Ensures APIs are protected with role and permission checks.</li>
                <li><strong>Error Handling</strong>: Unified and developer-friendly error responses for quick debugging.</li>
            </ul>
        </li>
        <li>⚙️ <strong>Scalable Backend Architecture</strong>
            <ul>
                <li>Built using <strong>Node.js</strong> and <strong>Express.js</strong>, designed for high performance and easy integration.</li>
            </ul>
        </li>
        <li>🛠️ <strong>Developer-Friendly Setup</strong>
            <ul>
                <li>Simplified installation process.</li>
                <li>Intuitive and modular route structure for quick navigation and testing.</li>
            </ul>
        </li>
        <li>📊 <strong>Comprehensive Documentation</strong>
            <ul>
                <li>Detailed API documentation with ready-to-use JSON payloads for testing in Postman.</li>
                <li>Well-commented codebase for easy readability and extensibility.</li>
            </ul>
        </li>
    </ul>

    <hr>

    <h2>📋 Environment Variables</h2>
    <p>To run this project, you will need to add the following environment variables to your <code>.env</code> file:</p>
    <ul>
        <li><code>PORT</code></li>
        <li><code>MONGO_URI</code></li>
        <li><code>JWT_SECRET</code></li>
        <li><code>JWT_ACCESS_EXPIRY</code></li>
        <li><code>JWT_REFRESH_EXPIRY</code></li>
    </ul>

    <hr>

    <h2>🚀 How to Run</h2>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/Wizard0880/VRV_Security_RBAC_Backend_Assignment.git</code></li>
        <li>Navigate to the project directory: <code>cd VRV_Security_RBAC_Backend_Assignment</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Create a <code>.env</code> file in the root directory and add the required environment variables listed above.</li>
        <li>Start the server: <code>npm start</code></li>
    </ol>

    <hr>

    <h2>🛣️ Route Structure</h2>
    <p>There are three main route files:</p>
    <ul>
        <li><strong>Auth Routes</strong> (<code>auth.routes</code>):
            <ul>
                <li><code>POST /register</code>: Register a new user.</li>
                <li><code>POST /login</code>: Login and obtain access/refresh tokens.</li>
                <li><code>POST /logout</code>: Logout and clear session tokens.</li>
                <li><code>POST /create-content</code>: Create content (requires authentication).</li>
            </ul>
        </li>
        <li><strong>Admin Routes</strong> (<code>admin.routes</code>):
            <ul>
                <li><code>GET /logs</code>: View system logs.</li>
                <li><code>PUT /update-user-status</code>: Update user status.</li>
                <li><code>DELETE /delete-user/:userId</code>: Delete a specific user by ID.</li>
            </ul>
        </li>
        <li><strong>Moderator Routes</strong> (<code>moderator.routes</code>):
            <ul>
                <li><code>GET /pending-content</code>: View pending content for review.</li>
                <li><code>POST /feedback</code>: Submit feedback on content.</li>
            </ul>
        </li>
    </ul>

    <hr>

    <h2>📬 Testing with Postman</h2>
    <ol>
        <li>Import the API endpoints into Postman.</li>
        <li>Use the following sample inputs for testing:</li>
    </ol>
    <ul>
        <li><strong>Register:</strong>
            <pre>
{
    "username": "testuser",
    "password": "securepassword",
    "role": "user"
}
            </pre>
        </li>
        <li><strong>Login:</strong>
            <pre>
{
    "username": "testuser",
    "password": "securepassword"
}
            </pre>
        </li>
        <li><strong>Create Content:</strong>
            <pre>
{
    "title": "Sample Content",
    "description": "This is a sample content."
}
            </pre>
        </li>
    </ul>
    <p>Ensure to include the access token in the headers for protected routes.</p>

    <hr>

    <h2>📜 License</h2>
    <p>This project is licensed under the MIT License.</p>

</body>

</html>

<h1 id="node.js-basic-crud-api-project">Node.js Basic CRUD API Project</h1>
<p>This is a basic CRUD API project created using Node.js, Express, Mongoose, and Joi for input validation. It includes user-related functionality, such as creating, reading, updating, and deleting entity data. The project structure is organized with separate folders for controllers, models, routes, and constants.</p>
<p><img src="https://img.shields.io/badge/Build-v1.0.0-blue" alt="Static Badge"> <a href="https://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"></a></p>
<h2 id="table-of-content">Table of Content</h2>
<p><a href="#getting-started">Getting Started</a><br>
<a href="#project-structure">Project Structure</a><br>
<a href="#usage">Usage</a><br>
<a href="#api-endpoints">API Endpoints</a><br>
<a href="#contributing">Contributing</a><br>
<a href="#license">License</a><br>
<a href="#maintainers">Maintainers</a></p>
<h2 id="getting-started">Getting Started</h2>
<h3 id="prerequisites">Prerequisites</h3>
<p>Before running the project, you should have the following installed:</p>
<ul>
<li>Node.js and npm.</li>
<li>MongoDB.</li>
</ul>
<h3 id="installations">Installations</h3>
<p><strong>1. Clone the repository</strong></p>
<pre><code>git clone https://github.com/TheOandO/Node
cd Node
</code></pre>
<p><strong>2. Install the dependencies:</strong><br>
<code>npm i express mongoose nodemon joi cors dotenv bcrypt</code><br>
<strong>3. Set up MongoDB Atlas</strong><br>
<strong>4. Set up environment variable</strong><br>
Configure the MongoDB connection:</p>
<ul>
<li>Open <code>.env</code>.</li>
<li>Update the MongoDB connection URL.<br>
<code>MONGODB_URL='mongodb://127.0.0.1:27017/urlexample'</code></li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<pre><code>src\
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Request data validation schemas
 |--models\         # Mongoose models (data layer)
 |--routes\         # Defines API routes using Express.
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--index.js        # Express App entry point
</code></pre>
<h2 id="usage">Usage</h2>
<h3 id="running-the-server">Running the server</h3>
<pre><code>npm start
</code></pre>
<p>The server will run on <code>http://localhost:8000</code> by default. You can change the port in <code>index.js</code>.</p>
<h2 id="api-endpoints">API Endpoints</h2>
<h3 id="user-api-endpoints">User API Endpoints</h3>
<ul>
<li><strong>Create User</strong>: <code>POST /api/users</code></li>
<li><strong>Read Users</strong>: <code>GET /api/users</code></li>
<li><strong>Update User by ID</strong>: <code>PUT /api/users/:userID</code></li>
<li><strong>Delete User by ID</strong>: <code>DELETE /api/users/:userID</code></li>
</ul>
<h3 id="todo-api-endpoints">Todo API Endpoints</h3>
<ul>
<li><strong>Create Todo</strong>: <code>POST /api/todos</code></li>
<li><strong>Read Todos</strong>: <code>GET /api/todos</code></li>
<li><strong>Update Todo by ID</strong>: <code>PUT /api/todos/:todoID</code></li>
<li><strong>Delete Todo by ID</strong>: <code>DELETE /api/todos/:todoID</code></li>
</ul>
<h3 id="data-validation">Data Validation</h3>
<ul>
<li>Data input is validated using Joi for user and todo endpoints. Check the <a href="https://joi.dev/api/">documentation</a> for more details on how to write Joi validation schemas.<br>
The validation schemas are defined in the <code>src/middleware</code> directory and are used in the controllers by providing them as parameters to the <code>validate</code> middleware.</li>
</ul>
<pre><code>const  joi  =  require('joi');

exports.userValidationSchema =  joi.object({
username: joi.string().required().max(30).label('username'),
password: joi.string().required().max(30).label('password'),
email: joi.string().email().label('email'),
});

exports.todoValidationSchema =  joi.object({
title: joi.string().max(300).required(),
description: joi.string().max(1000),
completed: joi.boolean()
});
</code></pre>
<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! If you’d like to improve the project or add new features, please follow these steps:</p>
<ol>
<li>Fork the project.</li>
<li>Create your feature branch: <code>git checkout -b feature/YourFeatureName</code></li>
<li>Commit your changes: <code>git commit -m 'Add some feature'</code></li>
<li>Push to the branch: <code>git push origin feature/YourFeatureName</code></li>
<li>Open a pull request.</li>
</ol>
<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="https://github.com/TheOandO/Node/blob/main/LICENSE">LICENSE</a> file for details.</p>
<h2 id="maintainer">Maintainer</h2>
<p><a href="https://github.com/TheOandO/">@TheOandO</a></p>


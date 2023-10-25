---


---

<h1 id="node.js-basic-crud-api-project">Node.js Basic CRUD API Project</h1>
<p>This is a basic CRUD API project created using Node.js, Express, Mongoose, and Joi for input validation. It includes user-related functionality, such as creating, reading, updating, and deleting entity data. The project structure is organized with separate folders for controllers, models, routes, and constants.</p>
<p><img src="https://img.shields.io/badge/Build-v1.0.0-blue" alt="Static Badge"></p>
<h2 id="table-of-content">Table of Content</h2>
<p><a href="#getting-started">Getting Started</a><br>
<a href="#project-structure">Project Structure</a><br>
<a href="#usage">Usage</a><br>
<a href="#api-endpoints">API Endpoints</a><br>
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
<p>Creating a README file for a basic CRUD API project with two models, “User” and “Todo,” is essential for documenting your project. A good README provides clear instructions, describes the project, and helps others understand how to use it. Below is a template for your README file:</p>
<p>markdown</p>
<p>`# Basic CRUD API with User and Todo Models</p>
<p>This is a basic CRUD (Create, Read, Update, Delete) API project with two models: “User” and “Todo.” It’s built using Node.js, Express, and MongoDB. The API allows you to manage users and to-dos with various endpoints for each model.</p>
<h2 id="getting-started-1">Getting Started</h2>
<h3 id="prerequisites-1">Prerequisites</h3>
<p>Before you begin, ensure you have met the following requirements:</p>
<ul>
<li>Node.js and npm installed.</li>
<li>MongoDB installed and running.</li>
<li>A code editor (e.g., Visual Studio Code).</li>
</ul>
<h3 id="installation">Installation</h3>
<ol>
<li>
<p>Clone this repository:</p>
<pre class=" language-bash"><code class="prism  language-bash"><span class="token function">git</span> clone <span class="token operator">&lt;</span>repository-url<span class="token operator">&gt;</span>
<span class="token function">cd</span> <span class="token operator">&lt;</span>project-directory<span class="token operator">&gt;</span>` 

</code></pre>
</li>
<li>
<p>Install the project dependencies:</p>
<p>bash</p>
</li>
</ol>
<ul>
<li>
<p><code>npm install</code></p>
</li>
<li>
<p>Configure the MongoDB connection:</p>
<ul>
<li>Open <code>src/constants/db.js</code>.</li>
<li>Update the MongoDB connection URL if necessary.</li>
</ul>
</li>
<li>
<p>Start the server:</p>
<p>bash</p>
</li>
</ul>
<ol start="2">
<li><code>npm start</code></li>
</ol>
<p>The server will run on <code>http://localhost:3000</code>.</p>
<h2 id="usage-1">Usage</h2>
<h3 id="user-api-endpoints-1">User API Endpoints</h3>
<ul>
<li><strong>Create User</strong>: <code>POST /api/users</code></li>
<li><strong>Read Users</strong>: <code>GET /api/users</code></li>
<li><strong>Read User by ID</strong>: <code>GET /api/users/:userID</code></li>
<li><strong>Update User by ID</strong>: <code>PUT /api/users/:userID</code></li>
<li><strong>Delete User by ID</strong>: <code>DELETE /api/users/:userID</code></li>
</ul>
<h3 id="todo-api-endpoints-1">Todo API Endpoints</h3>
<ul>
<li><strong>Create Todo</strong>: <code>POST /api/todos</code></li>
<li><strong>Read Todos</strong>: <code>GET /api/todos</code></li>
<li><strong>Read Todo by ID</strong>: <code>GET /api/todos/:todoID</code></li>
<li><strong>Update Todo by ID</strong>: <code>PUT /api/todos/:todoID</code></li>
<li><strong>Delete Todo by ID</strong>: <code>DELETE /api/todos/:todoID</code></li>
</ul>
<h3 id="data-validation-1">Data Validation</h3>
<ul>
<li>Data input is validated using Joi for user and todo endpoints.</li>
</ul>
<h2 id="contributing-1">Contributing</h2>
<p>Contributions are welcome! If you’d like to improve the project or add new features, please follow these steps:</p>
<ol>
<li>Fork the project.</li>
<li>Create your feature branch: <code>git checkout -b feature/YourFeatureName</code></li>
<li>Commit your changes: <code>git commit -m 'Add some feature'</code></li>
<li>Push to the branch: <code>git push origin feature/YourFeatureName</code></li>
<li>Open a pull request.</li>
</ol>
<h2 id="license-1">License</h2>
<p>This project is licensed under the MIT License - see the <a href="https://github.com/TheOandO/Node/blob/main/LICENSE">LICENSE</a> file for details.</p>
<h2 id="maintainer">Maintainer</h2>
<p><a href="https://github.com/TheOandO/">@TheOandO</a></p>


//Import frameworks and route
const express = require("express");
const router = require("./route");
const PORT = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//Load environment variable from .env
dotenv.config();

//Connect to Mongodb
mongoose
    .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
    console.log(err);
});

app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing) to handle requests from different origins.
app.use(express.json()); // Parse JSON request bodies.
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use('/', router); // Mount the routes defined in the 'router' module on the root path.

app.listen(PORT, () => {
    console.log(`OK`)
})


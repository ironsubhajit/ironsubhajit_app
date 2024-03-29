// GET ENVIROMENT VARS
require("dotenv/config");

// DB CONNECTION
const { mongoose } = require("./db-connection.js");

// EXPRESS
const express = require("express");

const bodyParser = require("body-parser");

// IMPORTS ROUTES
const projectRoute = require("./routes/project-route");

// EXPRESS APP
const app = express();

// MIDDLEWARE
const cors = require("cors");
app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());
app.use("/project", projectRoute);

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "we are on home page" });
});

// SERVER LISTEN ON PORT
const port = 3000;  
app.listen(port, () => {
  console.log(`Server started at port : ${port}`);
});

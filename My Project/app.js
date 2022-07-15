const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// IMPORT ROUTES
app.use(bodyParser.json());
app.use(require("./routes/index"));
app.use(require("./routes/todo"));



// Connection to DB
mongoose.connect("mongodb://localhost:27017/Project",()=>{
    console.log("DB connected");
})


// Server Listen
app.listen(80,()=>{
    console.log("Server Listening...");
})
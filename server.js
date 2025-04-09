const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require('./routes/blog');

const app = express();
const db = process.env.MONGO_URI
mongoose.connect(db).then(
    ()=>{console.log("Connected to db")}
).catch((error)=>{
    console.log(error, "failed");
})

const PORT = process.env.PORT || 3000

app.use('api/',blogRoutes)

app.listen(PORT, ()=>{
    console.log("Server is running");
});
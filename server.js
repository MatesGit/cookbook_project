const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");

db.connect();

app.get("/", (req,res) => { 
    res.send("Homepage");
 });

 app.listen(PORT,(err) => { 
    console.log(`Server runs on port: ${PORT}`)
  })
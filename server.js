const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");
const getMaterial = require("./routes/GET/getMaterial");

db.connect();
/**
 * ROUTY - GET
 */

app.use("/",getMaterial);
app.get("/", (req,res) => { 
    res.send("Homepage");
 });

 app.listen(PORT,(err) => { 
    console.log(`Server runs on port: ${PORT}`)
  })
const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/AlienDB";

const app = express();

//Connect to MongoDB and get connection handle
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

//Open connection
con.on("open", function() {
    console.log("connected........");
});

//configure app to accept JSON body format
app.use(express.json());

//Require Router and configure /aliens
const alienRouter = require("./routers/aliens");
app.use("/aliens", alienRouter);

//Listen to request from Port 9000
app.listen(9000, function() {
    console.log("Server started");
});
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// const mongoURL = require('./helpers/mongodb.js');
require("dotenv").config();

const app = express();

const mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@wdpcluster-ebucw.mongodb.net/dailytodoDB`;

mongoose.connect(mongoURL(), {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));

app.use ('', require('./routes/api.js'));


app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(process.env.PORT ||8080, function() {
	console.log("Server is now running on port 8080 or production port.");
});

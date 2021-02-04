const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// models
const db = require("./models");

// morgan
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

// mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

// start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
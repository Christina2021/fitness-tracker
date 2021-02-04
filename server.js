const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// morgan
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true, useUnifiedTopology: true });

// start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
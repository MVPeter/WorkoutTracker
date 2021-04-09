const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080

const app = expres();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    newUserUrlParser: true,
    useFindAndModify: false
});

app.use(require("/api.js"))

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
  });
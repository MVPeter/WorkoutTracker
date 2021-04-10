const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
const db = require("./models");

const PORT = process.env.PORT || 8080

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittracker", {
    newUserUrlParser: true,
    useFindAndModify: false
});



require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}!`);
  });
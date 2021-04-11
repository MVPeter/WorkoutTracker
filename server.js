const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');


const PORT = process.env.PORT || 8080

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// app.use(require("./routes/api-routes.js"));
// app.use(require("./routes/html-routes.js"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    newUserUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
  });
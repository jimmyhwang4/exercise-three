const express = require("express");
const app = express();
const port = 4000; // number

// app.get("/", (req, res) => res.send("Hello World")); // function being called

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

/* Serve Static Files */
app.use("/static", express.static("public"));

/* Routing in Express */
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Hello World Running!")); // function being called
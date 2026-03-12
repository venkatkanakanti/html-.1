
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// set ejs
app.set("view engine", "ejs");

// home page
app.get("/", (req, res) => {
    res.render("index");
});

// form submission
app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.render("result", {
        username: name,
        useremail: email
    });
});

// server start
app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});

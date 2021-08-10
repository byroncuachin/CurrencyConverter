const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate")

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

// home page
app.get("/", (req, res) => {
    res.render("home");
})

// app
app.get("/app", (req, res) => {
    res.render("app");
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Serving...");
})
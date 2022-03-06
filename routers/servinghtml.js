//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const servinghtml = fs.readFileSync("./public/pages/servinghtml/servinghtml.html").toString();

const servinghtmlPage = header.replace("%%TITLE_PLACEHOLDER%%", "Serving HTML") + nav.replace("%%SERVING_ACTIVE%%", "active") + servinghtml + footer;

router.get("/servinghtml", (req, res) => {
    res.send(servinghtmlPage);
});

module.exports = {
    router
};
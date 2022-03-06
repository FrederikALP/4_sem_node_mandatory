//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpagePage = header.replace("%%TITLE_PLACEHOLDER%%", "Frontpage") + nav.replace("%%HOME_ACTIVE%%", "active") + frontpage + footer;

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

module.exports = {
    router
};
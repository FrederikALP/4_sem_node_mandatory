//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const introduction = fs.readFileSync("./public/pages/introduction/introduction.html").toString();

const introductionPage = header.replace("%%TITLE_PLACEHOLDER%%", "Introduction") + nav.replace("%%INTRO_ACTIVE%%", "active") + introduction + footer;

router.get("/introduction", (req, res) => {
    res.send(introductionPage);
});

module.exports = {
    router
};
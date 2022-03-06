//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const firstserver = fs.readFileSync("./public/pages/firstserver/firstserver.html").toString();

const firstserverPage = header.replace("%%TITLE_PLACEHOLDER%%", "First Server") + nav.replace("%%FIRST_ACTIVE%%", "active") + firstserver + footer;

router.get("/firstserver", (req, res) => {
    res.send(firstserverPage);
});

module.exports = {
    router
};
//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const notesexpress = fs.readFileSync("./public/pages/notesexpress/notesexpress.html").toString();

const notesexpressPage = header.replace("%%TITLE_PLACEHOLDER%%", "Express") + nav.replace("%%EXPRESS_ACTIVE%%", "active") + notesexpress + footer;

router.get("/notesexpress", (req, res) => {
    res.send(notesexpressPage);
});

module.exports = {
    router
};
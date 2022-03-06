//const router = require("express").Router();
const express = require("express");
const router = express();

router.use(express.static("public"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const ssr = fs.readFileSync("./public/pages/ssr/ssr.html").toString();

const ssrPage = header.replace("%%TITLE_PLACEHOLDER%%", "SSR") + nav.replace("%%SSR_ACTIVE%%", "active") + ssr + footer;

router.get("/ssr", (req, res) => {
    res.send(ssrPage);
});

module.exports = {
    router
};
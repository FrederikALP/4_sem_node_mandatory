const express = require("express");
const app = express();

//app.use(express.static("public"));
//importing router
const frontpageRouter = require("./routers/frontpage.js");
const firstserverRouter = require("./routers/firstserver.js");
const introductionRouter = require("./routers/introduction.js");
const servinghtmlRouter = require("./routers/servinghtml.js");
const ssrRouter = require("./routers/ssr.js");
//router
app.use(introductionRouter.router);
app.use(firstserverRouter.router);
app.use(frontpageRouter.router);
app.use(servinghtmlRouter.router);
app.use(ssrRouter.router);


/*
//This is deprecated as routing has been implemented
const fs = require("fs");

const header = fs.readFileSync("./public/components/header/header.html").toString();
const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const introduction = fs.readFileSync("./public/pages/introduction/introduction.html").toString();
const firstserver = fs.readFileSync("./public/pages/firstserver/firstserver.html").toString();
const servinghtml = fs.readFileSync("./public/pages/servinghtml/servinghtml.html").toString();
const ssr = fs.readFileSync("./public/pages/ssr/ssr.html").toString();
const notesexpress = fs.readFileSync("./public/pages/notesexpress/notesexpress.html").toString();

//can also do %%CSS_LINK%% and replace the css for each file
// if you wanna replace 2 strings another option is to replace TITLE first and then
// take the result and replace the next item/string
const frontpagePage = header.replace("%%TITLE_PLACEHOLDER%%", "Frontpage") + nav.replace("%%HOME_ACTIVE%%", "active") + frontpage + footer;
const introductionPage = header.replace("%%TITLE_PLACEHOLDER%%", "Introduction") + nav.replace("%%INTRO_ACTIVE%%", "active") + introduction + footer;
const firstserverPage = header.replace("%%TITLE_PLACEHOLDER%%", "First Server") + nav.replace("%%FIRST_ACTIVE%%", "active") + firstserver + footer;
const servinghtmlPage = header.replace("%%TITLE_PLACEHOLDER%%", "Serving HTML") + nav.replace("%%SERVING_ACTIVE%%", "active") + servinghtml + footer;
const ssrPage = header.replace("%%TITLE_PLACEHOLDER%%", "SSR") + nav.replace("%%SSR_ACTIVE%%", "active") + ssr + footer;
const notesexpressPage = header.replace("%%TITLE_PLACEHOLDER%%", "Express") + nav.replace("%%EXPRESS_ACTIVE%%", "active") + notesexpress + footer;

//This is Server Side Rendering
app.get("/", (req, res) => {
    res.send(frontpagePage);
});

// nodemon -ext=html,json,js app.js
// for nodemon to restart when other files than just js files are changed

app.get("/introduction", (req, res) => {
    res.send(introductionPage);
});

app.get("/firstserver", (req, res) => {
    res.send(firstserverPage);
});

app.get("/servinghtml", (req, res) => {
    res.send(servinghtmlPage);
});

app.get("/ssr", (req, res) => {
    res.send(ssrPage);
});

app.get("/notesexpress", (req, res) => {
    res.send(notesexpressPage);
});
*/

const PORT = process.env.PORT || 9000;

// to run on a different port
// PORT="NUMBER" nodemon app.js
// For windows - SET PORT="NUMBER"" && node app.js 
const server = app.listen(PORT, () => {
    console.log("The Server is running", server.address().port);
});
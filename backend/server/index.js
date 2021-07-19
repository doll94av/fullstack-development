const express = require("express");
const allowControlOrigin = "https://localhost:3000"
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "test: /"});
});

app.get("/home", (req, res) => {
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  res.json({
    generalText: "we clicked the home button and we got this info from the backend",
    projectText: "On the home page we will probably just talk about work experience and the project",
    codeText: "Home page this may be blank unless I can find something relevant to fill the space with"
  });
});

app.get("/contact", (req, res) => {
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  res.json({
    generalText: "Thank you for your interest, I am looking forward to hearing from you!",
    projectText: "<linkedIn, email>",
    codeText: "probs empty"
  });
});

app.get("/webscraper", (req, res) => {
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  res.json({
    generalText: "Webscraper",
    projectText: "I used go and a package called 'colly' to create a simple webscraper. This takes in some reddit link and will scrap the first 10 unique images that it sees. Once it has scraped the relevant images it will store the contents into a .zip and offer it for download!",
    codeText: "Probably a few snippets regarding what I did"
  });
});

app.get("/mongobackend", (req, res) => {
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  res.json({
    generalText: "we clicked the mongobackend button and we got this info from the backend",
    projectText: "Backend code / database code / whatever",
    codeText: "more code that does not exist yet"
  });
});

app.get("/blog", (req, res) => {
  res.set('Access-Control-Allow-Origin', allowControlOrigin);
  res.json({
    generalText: "we clicked the mongobackend button and we got this info from the backend",
    projectText: "Backend code / database code / whatever",
    codeText: "Days worked on this project: 7/16, 7/17, 7/18"
  });
});

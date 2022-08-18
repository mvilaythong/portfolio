// make sure you have a .env file with your env variables
//  this is how you import those varaibles.
require("dotenv").config();
const { API_KEY } = process.env;
const express = require("express");
const app = express();
const request = require("request");

const logger = require("morgan");
app.use(logger("dev"));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", {data: []});
});

let baseUrl = "https://api.themoviedb.org/3";

app.get("/upcoming", (req, res) => {
  let route = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  let endpoint = `${baseUrl}/${route}`;
  request(endpoint, (error, response, body) => {
    let data = JSON.parse(body);
    console.log(data.results);
    res.render("home", { data: data.results });
  });
});

app.get('/kittycat', (req, res)=>{
  let route = `search/movie?api_key=${API_KEY}&language=en-US&query=${req.query.doggy}&page=1&include_adult=false`
  let endpoint = `${baseUrl}/${route}`
  request(endpoint, (error, response, body) => {
    let data = JSON.parse(body);
    console.log(data.results);
    res.render("home", { data: data.results });
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Movie app on port ${PORT}`));
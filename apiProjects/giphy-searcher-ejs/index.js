require("dotenv").config();
const { API_KEY } = process.env;
const express = require("express");
const app = express();
const request = require("request");


app.use(express.static("public"));
app.set("view engine", "ejs");

// https://api.giphy.com/v1/gifs/trending?api_key=EpJSZsrVCQVfHooKqb6FsQqtG1Xf5Z0U&limit=25&rating=g
// https://api.giphy.com/v1/gifs/search?api_key=EpJSZsrVCQVfHooKqb6FsQqtG1Xf5Z0U&q=dog&limit=25&offset=0&rating=g&lang=en 

let baseUrl = "https://api.giphy.com/v1/gifs";

app.get("/", (req, res) => {
  res.redirect("/home");
});


app.get("/home", (req, res) => {
  let route = `trending?api_key=${API_KEY}&limit=25`;
  let endpoint = `${baseUrl}/${route}`;
  request(endpoint, (error, response, body) => {
    let data = JSON.parse(body)
    // console.log(data.data);
    res.render("home", { data: data.data});
  });
});

app.get('/search', (req, res)=>{
  let route = `search?api_key=${API_KEY}&q={req.query.gif}&limit=25`
  let endpoint = `${baseUrl}/${route}`
  request(endpoint, (error, response, body) => {
    let data = JSON.parse(body);
    console.log(data.data);
    res.render("home", { data: data.data });
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Giphy Searcher app on port ${PORT}`));

const express = require("express");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req,res)=>{
    let url = "https://api.themoviedb.org/3/movie/868759?api_key=bdb0d5f2b4155f206af03d807eb1cc02";
    axios.get(url)
    .then (response => {
        let data = response.data;
        console.log(data.title);
        res.render("index", {dataToRender: data});
    });

});

app.listen(3000,()=>{
    console.log ("Server is running on Port 3000.");

});
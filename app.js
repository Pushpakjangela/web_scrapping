const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

const image = "/image/images.jpg";


app.get("/",function(req,res){
  res.render("home",{
    imageses : image
  });
});

app.listen(3000,function(){
  console.log("server is working on the 3000 port");
});

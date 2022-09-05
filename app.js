//---------------------------initialize express bodyParser ejs--------

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//-----------------------get functon ---------------

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/index",function(req,res){
  res.sendFile(__dirname + "/another.html");
});
//-------------post function-----------------
app.post("/",function(req,res){
  res.sendFile(__dirname + "/another.html");
});















app.listen(3000,function(){
  console.log("server is running in 3000 port");
});

function myOnClickFn(){
  document.location.href="another.ejs";
}


// =-------------------for bottons-----------------------------------
/*var search_btn = document.querySelector(".search_btn");
var close_btn = document.querySelector(".close_btn");
var input_search = document.querySelector(".input_search");
var search_box_wrap = document.querySelector(".search_box_wrap");

search_btn.addEventListener("click",function(){
  search_box_wrap.classList.add("active");
});

close_btn.addEventListener("click",function(){
  search_box_wrap.classList.remove("active");
});*/

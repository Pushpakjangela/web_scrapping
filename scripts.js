var search_btn = document.querySelector(".search_btn");
var close_btn = document.querySelector(".close_btn");
var input_search = document.querySelector(".input_search");
var search_box_wrap = document.querySelector(".search_box_wrap");

search_btn.addEventListener("click",function(){
  search_box_wrap.classList.add("active");
});

close_btn.addEventListener("click",function(){
  search_box_wrap.classList.remove("active");
});

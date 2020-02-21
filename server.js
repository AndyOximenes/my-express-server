
 const express = require("express")

 const app = express()


 app.get("/", function(req, res){
     res.send("Hello")
 })

 app.get("/contact", function(req, res){
     res.send("Contact me at email andy.oximenes@gmail.com")
 })

 app.get("/about", function(req, res){
     res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat nulla quis sem hendrerit, id molestie sem scelerisque. Aenean orci velit, egestas vel dolor sed.")
 })


 app.listen(3000, function(){
     console.log(`Server started on port 3000`);
 })
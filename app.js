const express = require("express");
const bodyParser = require("body-parser");
let ejs = require('ejs');
const date = require(__dirname + "/date.js");

const app = express();

app.use(express.static("public"));
var items = ["buy vegetables", "cook food", "eat food"];

var workItems = [];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/",function(req,res)
{
    let day = date.getDate();
    res.render("list", {listTitle:day, newListItems:items});
    
});



app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    console.log(workItems);
    res.redirect("/work");
    
});

//for work route.
app.get("/work",function(req,res){
    res.render("list",{listTitle: "workList", newListItems:workItems});
});

app.post("/",function(req,res){

     let item = req.body.newItem;
     var temp = req.body.list;
     console.log(temp);
     if(req.body.list==="workList"){
         workItems.push(item);

        res.redirect("/work");
        }
        else {

            items.push(item);
            //  console.log(item);

            res.redirect("/");
        }

} );
//for about page
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(process.env.PORT || 3000,function(req,res)
{
    console.log("server started on port 3000");
})
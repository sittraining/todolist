const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
var items = ["buy vegetables", "cook food", "eat food"];


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res)
{
    var today = new Date();


    
    var options = {
        weekday:"long" , day:"numeric",month:"long"
    };

    var day = today.toLocaleDateString("en-us",options);
    
    res.render("list", {kindOfDay:day, newListItems:items});
    
});


app.post("/",function(req,res){

     var item = req.body.newItem;
     items.push(item);

    // console.log(item);
    res.redirect("/");
} );

app.listen(process.env.PORT || 3000,function(req,res)
{
    console.log("server started on port 3000");
})
require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const App = express();
App.use(bodyParser.json());
App.use(morgan("tiny"));
mongoose.connect(process.env.CONNECTION_STRING,{dbName:"Wiki_DB"},function(err){
    if(!err){
        console.log("the server is running success");

    }else{
        console.log(err);
    }
});

const articlesSchema = {
    title:String,
    content :String
};
const Article = mongoose.model("Articles",articlesSchema)

App.get("/articles",function(req,res){


Article.find({},function(err,foundarticle){
    console.log(foundarticle)
    res.send(foundarticle)

});
});



App.get("/")




App.get("/",function(req,res){
    res.send("the sever is running ");
})





App.listen(3000,function(err){
    console.log("NodeJs server is running succes")
})

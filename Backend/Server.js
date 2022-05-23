require('dotenv/config');

const express = require("express");
const bodyParder = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");



const App = express();
const api = process.env.API_URL;
App.use(bodyParder.json());
App.use(morgan("tiny"));

mongoose.connect(process.env.CONNECTION_STRING,{dbName:"Wiki_DB"},function(err){
        if(!err){
            console.log("the server is connected succesfully");
        }else{
            console.log(err)
        }
    });
    const articlesSchema = {
        title:String,
        content:String,
    }
    const Article = mongoose.model("Articles",articlesSchema)
    App.get("/Articles",function(req,res){
        Article.find(function(err,fundArticles){
            if(!err){
                res.send(fundArticles)
            }else{
                res.send(err);
            }
        })

    
    
})
        

    
        App.post("/Articles",function(req,res){
            const newarticle = new Article({
                title:req.body.title,
                content:req.body.content
            });
            newarticle.save();
            
        })
    
        
        
    




App.listen(3000,function(){
    console.log("the server is running sucess");
})
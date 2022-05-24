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


const api = process.env.API_URL;

const productSchema = {
    name:String,
    image:String,
    counInStock:Number
};
const Product = mongoose.model("Product",productSchema)


App.post(`${api}/products`,function(req,res){
console.log(req.body.name);
console.log(req.body.image);
    
    const product1 = new Product({
        name:req.body.name,
        image:req.body.image,
        counInStock:req.body.counInStock
    })
product1.save().then((createdproduc=>{
    res.status(201).json(createdproduc) 
})).catch((err)=>{
    res.status(500).json({
        error:err,
        success:false

    });
})
    
})




App.listen(3000,function(err){
    console.log("NodeJs server is running succes")
})

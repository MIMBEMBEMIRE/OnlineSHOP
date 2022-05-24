require("dotenv/config");
const express = require("express");
const App = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Product = require("./models/product");
const api = process.env.API_URL;
const productsRouter = require("./routers/product")




App.use(bodyParser.json());
App.use(morgan("tiny"));
App.use(`${api}/products`,productsRouter)

mongoose.connect(process.env.CONNECTION_STRING,{dbName:"Wiki_DB"},function(err){
    if(!err){
        console.log("the server is running success");

    }else{
        console.log(err);
    }
});














App.listen(3000,function(err){
    console.log("NodeJs server is running succes")
})

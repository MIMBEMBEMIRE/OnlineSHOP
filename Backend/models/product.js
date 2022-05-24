const mongoose =require("mongoose");


const productSchema = mongoose.Schema({
    name:String,
    image:String,
    counInStock:Number
});


    exports.Product = mongoose.model("Product",productSchema)

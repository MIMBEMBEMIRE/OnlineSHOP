const express = require("express");
const router = express.Router();
const Product =require("../models/product");



router.get(`/`, async(req,res)=>{
    const productList = await Product.find({})
    res.send(productList);
})

router.post(`/`,function(req,res){
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
    module.exports=router;
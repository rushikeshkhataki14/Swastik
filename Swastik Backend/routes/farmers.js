var express = require("express");
var mongoose = require("mongoose");
var Farmer = require ("../models/Farmer");

const router = express.Router();
var app = express();
app.use(express.json());

router.post("/save",(req,res)=>{
    let body = req.body;
    let farmers = new Farmer(
        {
            name:body.name,
            email:body.email,
            mobileno:body.mobileno,
            landspace:body.landspace,
            password:body.password
        }
    );
    farmers.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
   
});

router.get("/list",(req,res)=>{
    Farmer.find().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.get("/get/:id",(req,res)=>{
    Farmer.findById(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.put("/update/:id",(req,res)=>{
    let body= req.body
    Farmer.findByIdAndUpdate(req.params.id, {name:body.name, email:body.email , mobileno:body.mobileno,
        landspace:body.landspace,
        password:body.password}).then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.delete("/delete/:id",(req,res)=>{
    let body= req.body
    Farmer.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

module.exports = router;
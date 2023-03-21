let express = require("express");
let mongoose = require("mongoose")
var Crop = require ("../models/Crop"); 

const router = express.Router();


router.post("/",(req,res)=>{
    let body = req.body;
    let object = new Crop(body);
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.put("/:id",(req,res)=>{
    let body = req.body;
    let id = req.params.id;
    Crop.findByIdAndUpdate(id,body).then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.get("/",(req,res)=>{
    Crop.find().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    Crop.findById(id).then((result)=>{
        // console.log(result);
       
            res.end(JSON.stringify({status:"success",data:result}))
       
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed",data: err}));
    });
})

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    Crop.findByIdAndDelete(req.params.id).then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}));
    });
})

module.exports = router;
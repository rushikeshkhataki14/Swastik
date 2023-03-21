let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let schema = new Schema(
    {
        // adminid:{type:Number},
        cropid:{type:Number,},
        rdate:{type:Date, required:true},
        dose:{type:String, required:true},
        space:{type:String, required:true},
        drip:{type:String, required:true},
        spare:{type:String, required:true},
    }
);
let Recommendation = mongoose.model("recommendations",schema);

module.exports = Recommendation;


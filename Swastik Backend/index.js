var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

app.use(express.static("assets"));

app.use(bodyparser.json({limit:'5000mb'}));
app.use(bodyparser.urlencoded({limit:'5000mb', extended: true}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/swastikkrushisevakendra");
const db = mongoose.connection;
db.on("error", error=> console.log(error));
db.on("open", ()=> console.log("Connection Established"));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method == "OPTIONS")
    {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.get("/", function(req, res){
    res.send("Hello Welcome");
    res.end();
});

app.use("/farmers",require("./routes/farmers"))
app.use("/recommendations",require("./routes/recommendations")),
app.use("/crops",require("./routes/crops"))

app.listen(8081, ()=>{
    console.log("APIs running on http://localhost:8081/");
})


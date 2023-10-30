// import e from "express";
import express from "express"
import mongoose from "mongoose";
import studentRouter from './Routes/Student.Route.js'
import adminRouter from './Routes/Admin.Route.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

let url = "mongodb+srv://Tout:Lkr8k1SHwWgitNSr@cluster0.mybmtfa.mongodb.net/SCM?retryWrites=true&w=majority"
mongoose.connect(url).then(result => {
    

    app.use("/admin",adminRouter);
    app.use("/student",studentRouter);
    app.listen(3000, () => {
        console.log("Mongoose/server connect")
    })
}).catch(err => {
    console.log(err);
    console.log("database not connect")
})

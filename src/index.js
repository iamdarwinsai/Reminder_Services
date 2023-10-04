const express=require("express");
const bodyParser=require("body-parser");
const { PORT } = require("./config/serverConfig");

const v1Routes=require("./routes/index")

const setupServer=()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use("/api",v1Routes);


    app.listen(PORT,()=>{
        console.log(`Server started at Port : ${PORT}`);
    })
}

setupServer()
const express=require("express");
const bodyParser=require("body-parser");
const { PORT } = require("./config/serverConfig");

const emailService=require("./service/emailService")

const setupServer=()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    emailService.sendBasicEmail(
        'support@admin.com',
        'sickpuch@gmail.com',
        'Just checking how are you',
        'DO you like our support'
    );
    app.listen(PORT,()=>{
        console.log(`Server started at Port : ${PORT}`);
    })
}

setupServer()
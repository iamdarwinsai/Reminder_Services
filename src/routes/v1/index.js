const express=require("express");
const router=express.Router();

const reminderRoute=require("../../controllers/reminderServiceControllers")

router.post("/reminders",reminderRoute.create);


module.exports=router
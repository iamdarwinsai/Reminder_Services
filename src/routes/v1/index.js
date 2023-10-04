const express=require("express");
const router=express.Router();

const reminderRoute=require("../../controllers/reminderServiceControllers")

router.post("/reminders",reminderRoute.create);
router.get("/reminders",reminderRoute.getAll);


module.exports=router
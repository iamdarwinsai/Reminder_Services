const cron = require('node-cron');
const sender = require('../config/emailConfig');

const EmailService=require("../service/emailService")

const setUpJob=()=>{
    cron.schedule("*/2 * * * *",async ()=>{
        const emailService=new EmailService();
        const response =await emailService.fetchPendingEmails();
        response.forEach((user)=>{
            sender.sendMail({
                from:"Support@ADMIN.COM",
                to:user.recepientEmail,
                subject:user.subject,
                text:user.content
            },async (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                    await emailService.updateStatus(user.id);
                }
            })
        })
    })
}

module.exports=setUpJob;
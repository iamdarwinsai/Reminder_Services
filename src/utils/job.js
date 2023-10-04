const cron = require('node-cron');
const EmailService = require('../service/emailService');


const setUpJob=()=>{
    cron.schedule("*/2 * * * *",()=>{

    })
}

module.exports=setUpJob;
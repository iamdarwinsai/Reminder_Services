const { createChannel, subscribeMessage } = require("./messageQueue");
const EmailService=require("../service/emailService");
const { BINDING_KEY } = require("../config/serverConfig");
const emailService=new EmailService();

async function helper(payload){
   if(payload.service=='SEND MAIL'){
    const emailPayload=payload.data;
    emailService.sendBasicEmail(emailPayload.from,emailPayload.to,emailPayload.subject,emailPayload.text)
   }
}

async function createAndSubscribe(){
   const channel=await createChannel();
   subscribeMessage(channel,helper,BINDING_KEY)
}


module.exports={helper,createAndSubscribe}
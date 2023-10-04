const sender = require("../config/emailConfig")

const sendBasicEmail =async (mailFrom, mailTo, mainSubject, mailBody) => {

   try {
    const response =await  sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mainSubject,
        text:mailBody
    })
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}


module.exports={
    sendBasicEmail
}
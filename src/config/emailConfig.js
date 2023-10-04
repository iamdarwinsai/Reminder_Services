const nodemailer = require('nodemailer');
const { EMAIL, EMAIL_PWD } = require('./serverConfig');
console.log(EMAIL,EMAIL_PWD);
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PWD
    }
})

module.exports=sender
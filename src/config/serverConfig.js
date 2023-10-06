const dotenv = require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT,
    EMAIL:process.env.EMAIL,
    EMAIL_PWD:process.env.EMAIL_PWD,
    EXCHANGE_NAME:process.env.EXCHANGE_NAME,
    BINDING_KEY:process.env.BINDING_KEY,
}
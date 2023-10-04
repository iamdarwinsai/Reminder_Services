const sender = require("../config/emailConfig");
const ReminderRepo = require("../repository/emailrepo");

class EmailService {

    constructor() {
        this.emailRepo = new ReminderRepo();
    }

    async create(data) {
        try {
            const response = await this.emailRepo.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong n service")
            throw {
                error
            }
        }
    }

    async getAll(data) {
        try {
            const response = await this.emailRepo.getAll(data);
            console.log("service",response);
            return response;
        } catch (error) {
            console.log("Something went wrong n service")
            throw {
                error
            }
        }
    }


    async sendBasicEmail(mailFrom, mailTo, mainSubject, mailBody) {

        try {
            const response = await sender.sendMail({from: mailFrom, to: mailTo, subject: mainSubject, text: mailBody})
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = EmailService;

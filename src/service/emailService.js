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
      console.log("Something went wrong n service");
      throw {
        error,
      };
    }
  }

  async fetchPendingEmails() {
    try {
      const response = await this.emailRepo.getAll({ status: "Pending" });
      response.forEach((user) => {
        console.log(user.recepientEmail, user.status, user.id);
      });
      return response;
    } catch (error) {
      console.log("Something went wrong n service");
      throw {
        error,
      };
    }
  }

  async sendBasicEmail(mailFrom, mailTo, mainSubject, mailBody) {
    try {
      const response = await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mainSubject,
        text: mailBody,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async updateStatus(id) {
    try {
      const response = await this.emailRepo.updateStatus(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async testingQueue(data) {
    console.log("INSIDE SERVICE LAYER", data.toString());
  }
}

module.exports = EmailService;

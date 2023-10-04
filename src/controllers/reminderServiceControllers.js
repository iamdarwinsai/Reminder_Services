const EmailService = require("../service/emailService");

const emailService = new EmailService();

const create = async (req, res) => {
    try {
        const response = await emailService.create(req.body)
        console.log("CONtroller",response);
        return res.status(201).json({data: response, message: "Added message reminder", err: {}, success: true})
    } catch (error) {
        return res.status(500).json({success: false, data: {}, err: error, message: 'unable to register an email reminder'})
    }

}


module.exports = {
    create
}

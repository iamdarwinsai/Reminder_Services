const {ReminderService}=require("../models/index")

class ReminderRepo{

    async create(data){
        try {
            const response =await ReminderService.create(data);
            return response;
        } catch (error) {
            console.log("Something went wron in repo layer");
            throw {error}
        }
    } 
}

module.exports=ReminderRepo;
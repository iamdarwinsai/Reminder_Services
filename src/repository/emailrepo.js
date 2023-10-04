const { Op } = require("sequelize");

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
    
    async getAll(data){
        try {
            const response=await ReminderService.findAll({
                where:{
                    status:data.status,
                    notifyTime:{
                        [Op.lte]:new Date()
                    } 
                }
            })
            return response;
        } catch (error) {
            console.log("Something went wron in repo layer");
            throw {error}
        }
    }

    async updateStatus(dataId){
        try {
            const response=await ReminderService.findByPk(dataId);
            if(response.status)
                response.status="SUCCESS"
                await response.save()
            return response;
        } catch (error) {
            console.log("Something went wron in repo layer");
            throw {error}
        }
    }
}

module.exports=ReminderRepo;
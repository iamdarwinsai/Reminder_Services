'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ReminderService extends Model { /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) { // define association here
        }
    } ReminderService.init({
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recepientEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["Pending", "SUCCESS", "FAILED"],
            defaultValue:"Pending"
        },
        notifyTime: {
            type: DataTypes.DATE,
            allowNull:false
        }
    }, {sequelize, modelName: 'ReminderService'});
    return ReminderService;
};

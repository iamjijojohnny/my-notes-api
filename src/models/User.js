const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");
const Note = require("./Note");

const User = sequelize.define("User",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    timestamps: true
});

module.exports = User;
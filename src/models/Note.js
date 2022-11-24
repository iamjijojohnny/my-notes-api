const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");
const User = require("./User");

const Note = sequelize.define("Note",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
},{
    timestamps: true
});

module.exports = Note;
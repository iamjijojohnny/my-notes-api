const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const Tag = sequelize.define("Tag",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING
});

module.exports = Tag;
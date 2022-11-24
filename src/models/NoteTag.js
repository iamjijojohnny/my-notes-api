const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");
const Note = require("./Note");
const Tag = require("./Tag");

const NoteTag = sequelize.define("NoteTags",{
    NoteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Note,
            key: "id"
        }
    },
    TagId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tag,
            key: "id"
        }
    }
})

module.exports = NoteTag
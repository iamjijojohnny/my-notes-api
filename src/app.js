const express = require('express')
const sequelize = require('./configs/sequelize')
const Note = require('./models/Note')
const NoteTag = require('./models/NoteTag')
const Tag = require('./models/Tag')
const User = require('./models/User')
const app = express()
const port = 3000

 try {
    User.hasMany(Note)
    Note.belongsTo(User)
    Note.belongsToMany(Tag, {through: NoteTag})
    Tag.belongsToMany(Note, {through: NoteTag});

    sequelize.sync();
    console.log("db connection succesfull");

} catch (error) {
    console.log("db failed " + error);
}



app.get('/', (req, res) => {
    createuser();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function createuser() {
    const user1 = await User.create({
        fullname: "Jijo",
        email: "orange.jijo@gmail.com",
        password: "1234",
        token: "1234"
    });

    const note = await Note.create({
        title: "Blha",
        body: "sdsd",
        UserId: user1.id
    })


}
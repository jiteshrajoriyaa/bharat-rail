const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ehjtbqw.mongodb.net/bharat-rail`)

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = {
    User
}
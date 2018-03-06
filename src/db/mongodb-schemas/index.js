const mongoose = require('mongoose')
const debug = require('debug')('user-schema')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: String,       
    username: String,       
    password: String,                      
}, {
        collection: "user"
    })

module.exports = {
    userSchema
}
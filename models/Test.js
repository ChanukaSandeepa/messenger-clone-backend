const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name : String,
    email : String
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test
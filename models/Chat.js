const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    users : [{
        id : mongoose.Types.ObjectId,
        profile : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }
    }],
    messages : [{
        id : mongoose.Types.ObjectId,
        message : {
            type : mongoose.Types.ObjectId,
            ref : 'Message'
        }
    }]
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat
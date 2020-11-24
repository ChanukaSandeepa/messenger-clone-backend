const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    message : {
        type : String,
        required : true
    },
    chat : {
        type : mongoose.Types.ObjectId,
        ref : 'Chat'
    }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
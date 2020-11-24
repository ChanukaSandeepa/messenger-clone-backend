const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        firstName : {
            type : String,
        },
        lastName : {
            type : String
        },
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    picture : {
        type : String,
        required : true
    },
    status : {
        default : false,
        type : Boolean
    },
    friends : [{
        id : mongoose.Types.ObjectId,
        profile : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }
    }],
    reuests : [{
        id : mongoose.Types.ObjectId,
        profile : {
            type : mongoose.Types.ObjectId,
            ref : 'User'
        }
    }],
    chats : [
        {
            id : mongoose.Types.ObjectId,
            chat : {
                type : mongoose.Types,
                ref : 'Chat'
            }
        }
    ]
})

const User = mongoose.model('User', userSchema)

module.exports = User
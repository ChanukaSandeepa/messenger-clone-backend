const mongoose = require('mongoose')

const URL = ''

mongoose.connect(URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const connection = mongoose.connection

connection.on('error', () => {
    console.log('Error on mongoose')
})

connection.on('connected', () => [
    console.log('DB was connected')
])

connection.on('disconnected', () => {
    console.log('disconnected')
})

process.on('SIGINT', function(){

    connection.close(function(){
        console.log('Mongoose connection was terminated')
    })

})

module.exports = mongoose
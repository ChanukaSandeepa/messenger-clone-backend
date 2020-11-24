const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/mongoose')
const Test = require('./models/Test')


const app = express()

const PORT = process.env.PORT || 9000

app.use(express.json())



app.post('/test', async (req, res) => {

    const { name, email } = req.body

    const test = new Test({
        name,
        email
    })

    const result = await test.save()
    res.send(result)
})


app.listen(PORT, () => {
    console.log(`App is listing on ${PORT}`)
})

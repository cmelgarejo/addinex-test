// establish an express app
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())


// establish connection & give yourself a message so you know when its complete
const source = process.env.MONGODB_SOURCE || 'mongodb://localhost/addinex-test'

mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.info("Connected!");
})

const intervalRoutes = require('./src/controllers/interval.controller')
const eventRoutes = require('./src/controllers/event.controller')
app.use('/interval', intervalRoutes)
app.use('/events', eventRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.info(`Backend running on port: ${PORT}.`);
})
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const StudentRoute = require('./routes/StudentRoute')
const CasualWorkerRoute = require('./routes/CasualStuff')
app.use('/students',StudentRoute)
app.use('/Casual',CasualWorkerRoute)

const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/SchoolBasedApi',()=>{
    console.log("connected to db")
})

app.listen(port,()=>{
    console.log("listening at Port: " + `${port}`)
})
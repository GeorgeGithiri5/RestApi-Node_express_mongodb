const mongoose = require('mongoose')

const CasualWorkerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Role:{
        type: String,
        required: true
    },
    Age:{
        type: String,
        required: true
    },
    Salary:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("casual",CasualWorkerSchema)
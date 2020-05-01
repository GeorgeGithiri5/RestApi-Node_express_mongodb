const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    reg_no:{
        type: String,
        required: true
    },
    phone_number:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    hostel:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('student',StudentSchema)
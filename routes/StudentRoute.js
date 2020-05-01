const express = require('express')
const router = express.Router()
const StudentModel = require('../model/StudentModel')

// get all students
router.get('/',async (req,res)=>{
    const getAll = await StudentModel.find()
    res.json(getAll)
})

// post student
router.post('/',async (req,res)=>{
    const post = new StudentModel({
        name:req.body.name,
        reg_no:req.body.reg_no,
        phone_number:req.body.phone_number,
        email:req.body.email,
        course:req.body.course,
        hostel:req.body.hostel
    })
    const savePost = await post.save()
            .then(data=>{
                res.json(data)
            })
})

// get Singe student
router.get('/:studentId',async (req,res)=>{
    const singelStudent =await StudentModel.findById(req.params.studentId)
    res.json(singelStudent)
})
// remove Student
router.delete('/:studentId',async (req,res)=>{
    const removeStudent = await StudentModel.remove({_id: req.params.studentId})
    res.json(removeStudent)
})

router.patch('/:studentId',async (req,res)=>{
    const update = await StudentModel.updateMany({_id: req.params.studentId},{$set: {
        name: req.body.name,
        email: req.body.email
    }})
    res.json(update)
})
module.exports = router
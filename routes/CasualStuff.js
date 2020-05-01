const express = require('express')
const router = express.Router()
const Casual = require('../model/CasualWorkerModel')

// getting all workers
router.get('/',async (req,res)=>{
    const AllWorkers =await Casual.find()
    res.json(AllWorkers)
})

router.post('/',async (req,res)=>{
    const post = new Casual({
        name:req.body.name,
        email:req.body.email,
        Role:req.body.Role,
        Age:req.body.Age,
        Salary: req.body.Salary,
        sex:req.body.sex
    })
    const saved = await post.save()
                .then(data=>{
                    res.json(data)
            })
})

// get specific post
router.get('/:postId',async (req,res)=>{
    const getSpec = await Casual.findById(req.params.postId)
    res.json(getSpec)
})

// delete posts
router.delete('/:postId',async (req,res)=>{
    const removePost = await Casual.remove({_id:req.body.params})
    res.json(removePost)
})

// Update data
router.patch('/:postId',async(req,res)=>{
    const update = await Casual.updateMany({_id:req.body.params},
        {$set: {
            name: req.body.name,
            Role:req.body.Role,
            Age:req.body.Age,
            Salary: req.body.Salary,
        }})
})
module.exports = router
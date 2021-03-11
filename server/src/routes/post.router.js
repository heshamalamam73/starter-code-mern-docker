const express =require("express");
const postRouter = express.Router();
const Post = require('../models/post.model');

postRouter.get("/" , (req , res , next)=> {
    Post.find({}, function (err, result){
        if(err){
            res.status(400).send({
                "success": false,
                "error":err.message
            })
        }
        res.status(200).send({
            "success" : true,
            "data" : result
        })
    })
})
postRouter.get("/:id", (req, res ,next)=>{
    const id = req.params.id;
    Post.findById(id , function(err , result){
        if(err){
            res.status(400).send({
                "success": false,
                "error":err.message
            })
        }
        res.status(200).send({
            "success" : true,
            "data" : result
        })
    })
})
postRouter.post("/", (req , res , next)=> {
    let newPost= {
        title : req.body.title ,
        body: req.body.body,
        author : req.body.author
    }
    Post.create(newPost ,function(err , result){
        if(err){
            res.status(400).send({
                "success": false,
                "error":err.message
            })
        }
        res.status(200).send({
            "success" : true,
            "data" : result,
            message : "Post Created successfully ! "
        })
    } )
})
postRouter.patch("/:id" , (req, res ,next )=> {
    let fieldsToUpdate = req.body;
    Post.findByIdAndUpdate(req.params.id , {$set : fieldsToUpdate} , {new : true}, function(err, result){
        if(err){
            res.status(400).send({
                "success": false,
                "error":err.message
            })
        }
        res.status(200).send({
            "success" : true,
            "data" : result,
            message : "Post Updated successfully ! "
        })

    })
})

postRouter.delete("/:id", (req, res ,next)=> {
    Post.findByIdAndDelete(req.params.id ,function(err, result){
        if(err){
            res.status(400).send({
                "success": false,
                "error":err.message
            })
        }
        res.status(200).send({
            "success" : true,
            "data" : result,
            message : "Post deleted successfully ! "
        })

    })

})
module.exports =postRouter ;
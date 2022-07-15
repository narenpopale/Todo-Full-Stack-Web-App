const { application } = require('express');
const express = require('express');
const Post = require("../models/Task");

const router = express.Router();



// POST REQUEST
router.post("/todo",async (req,res)=>{
    const post = new Post({ 
        task: req.body.task,
        Mark: "false"
     });

    try {
        const savedPost = await post.save();
        res.redirect("/");
    }
    catch (err) {
        res.json({ message: err });
    }
})



//  UPDATE REQUESTS
router.get("/todo/update/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { Mark: "true" } });
        res.redirect("/");
    }
    catch (err) {
        res.json({ message: err });
    }
})

router.get("/todo/active", async (req, res) => {
    try {
        const updatedPost = await Post.updateMany({ Mark: "true" }, { $set: { Mark: "false" } });
        res.redirect("/");
    }
    catch (err) {
        res.json({ message: err });
    }
})

router.get("/todo/completed", async (req, res) => {
    try {
        const updatedPost = await Post.updateMany({ Mark: "false" }, { $set: { Mark: "true" } });
        res.redirect("/");
    }
    catch (err) {
        res.json({ message: err });
    }
})



//  DELETE REQUEST
router.get("/todo/delete", async (req, res) => {
    try {
        const updatedPost = await Post.deleteMany({Mark:"true"});
        res.redirect("/");
    }
    catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;
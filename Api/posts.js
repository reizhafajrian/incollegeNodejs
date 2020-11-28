const { exec } = require("child_process");
const express = require("express");

const router = express.Router();

const Post = require("../Post")
router.get('/', async(req, res) => {
    try {
        const getPost = await Post.find()
        res.json(getPost)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post('/post', async(req, res) => {
    const post = new Post({
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        console.log(err)
    }
});

router.put("/login", async(req, res) => {
    try {
        const getData = await Post.find({ email: req.body.email })
        if (getData[0].password === req.body.password) {
            res.json(true)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
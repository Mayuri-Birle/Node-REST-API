const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');


/************************GET ALL POSTS***************************/
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (err) {
        res.json({
            message: err
        });
    }

});
/************************CREATE A POSTS***************************/
router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({
            message: err
        });
    };

});

/************************GET A POST***************************/
router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({
            message: err
        });
    };
})

/************************DELETE A POST***************************/
router.delete('/:id', async (req, res) => {
    try {
        const removePost = await Posts.remove({
            _id: req.params.id
        });
        res.json(removePost);
    } catch (err) {
        res.json({
            message: err
        });
    };
})

/*****************************UPDATE A POST***********************************/
router.patch('/:id', async (req, res) => {
    try {
        const updatePost = await Posts.updateOne({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.json(updatePost);
    } catch (err) {
        res.json({
            message: err
        });
    };
})
module.exports = router;
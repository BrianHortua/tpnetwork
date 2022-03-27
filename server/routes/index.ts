import { trackSlotScopes } from "@vue/compiler-core";
import { Router } from "express";
import Post from '../models/Post'
const router = Router()

/**
 * Read posts
 */
router.get("/posts", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});

/**
 * Create post
 */
router.post("/posts", async (req, res) => {
    const {title, description} = req.body
    const post = new Post({title, description})
    await post.save()
    res.json(post);
});

/**
 * Read specific post 
 */
router.get("/posts/:id", async (req, res) => {
    try{
        const task = await Post.findById(req.params.id)

        if (!task) return res.status(404).json({message: "Task not found" });
        res.send(task);
    }   catch(error) {
        return res.status(500).send(error);
    }
});
/**
 * Delete post
 */
router.delete("/posts/:id", async (req, res) => {
    try{
    const task = await Post.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({message: "Task not found" });

    return res.json(task);
    }
    
    catch (error){
    return res.status(500).send(error); 
    }
});



export default router;
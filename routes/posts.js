import { Router } from "express";
import {
  createPost,
  deletePost,
  getPosts,
  getPost,
  updatePost,
} from "../controllers/postController.js";
const router = Router();

// get all posts or a single post
router.get("/", getPosts);

router.get("/:id", getPost);

// create new post
router.post("/", createPost);

// update post
router.put("/:id", updatePost);

// delete post
router.put("/:id", deletePost);

export default router;

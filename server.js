import { log } from "console";
import express from "express";
import posts from "./routs/posts.js";

// initialize express
const app = express();

// setup static folder (middleware)
// app.use(express.static(path.join(__dirname, "public")));

// Routs
app.use("/api/posts", posts);

app.listen(8000, () => console.log("server is running on port 8000"));

import express from "express";
import posts from "./routs/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

// initialize express
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);
app.use(errorHandler);

// setup static folder (middleware)
// app.use(express.static(path.join(__dirname, "public")));

// Routs
app.use("/api/posts", posts);

app.listen(8000, () => console.log("server is running on port 8000"));

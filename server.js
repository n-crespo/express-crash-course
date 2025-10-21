import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

// initialize express
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routs
app.use("/api/posts", posts);

// error handler/middlware
app.use(logger);
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log("server is running on port 8000"));

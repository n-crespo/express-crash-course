import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

// initialize express
const app = express();

// get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// error handler/middlware
app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/api/posts", posts);
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log("server is running on port 8000"));

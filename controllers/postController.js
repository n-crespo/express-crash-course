let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};

// get a single post
// GET /api/posts/:ld
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id ${id} was not found :(.`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

// create a new post
// POST /api/posts
export const createPost = (req, res, next) => {
  if (!req.body?.title) {
    const error = new Error(`Please include a title.`);
    error.status = 400;
    return next(error);
  }

  const newPost = {
    id: posts.length + 1,
    title: req.body.title | "",
  };

  posts.push(newPost);
  res.status(201).json(posts);
};

// Update posts
// PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with the id ${id} was not found :(.`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// Delete post
// DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with the id ${id} was not found :(.`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};

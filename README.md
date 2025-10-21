# Some HTTP Codes


| Codes           | Meaning          |
| --------------- | ---------------  |
| 200             | Success          |
| 201             | Sucess (created) |
| 300             | Redirect         |
| 400             | Client Error     |
| 500             | Server Error     |


## Dealing with query params

```js
// localhost:8000/api/posts?limit=2
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});
```

## Dealing with dynamic route params

```js
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json(posts.filter((post) => post.id === id));
});
```

## Serving HTML

```js
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
```

## Static folder setup:

```js
app.use(express.static(path.join(__dirname, "public")));
```

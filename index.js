const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('New Request Recieved!');
//   res.send('<h1>Welcome to Express Node.JS</h1>');
// });

app.get('/', (req, res) => {
  res.send('<h2>Home Page</h2>');
});

app.get('/cats', (req, res) => {
  res.send('<h2>Cats Page</h2>');
});

app.get('/dogs', (req, res) => {
  res.send('<h2>Dogs Page</h2>');
});

app.get('/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h2>Browsing ${subreddit} subreddit!</h2>`);
});

app.get('/:subreddit/:postID', (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`<h2>Viewing postID: ${postID} of ${subreddit} subreddit!</h2>`);
});

app.get('*', (req, res) => {
  res.send('<h2>This page is not found</h2>');
});

app.listen(8080, () => {
  console.log('Listening Port 8080!');
});

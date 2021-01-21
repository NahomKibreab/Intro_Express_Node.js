const express = require('express');
const app = express();

app.use((req, res) => {
  console.log('New Request Recieved!');
  res.send('<h1>Welcome to Express Node.JS</h1>');
});

app.listen(8080, () => {
  console.log('Listening Port 8080!');
});

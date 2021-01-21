const express = require('express');
const app = express();

app.use(() => {
  console.log('New Request Recieved!');
});

app.listen(8080, () => {
  console.log('Listening Port 8080!');
});

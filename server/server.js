const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('this is where the app goes');
})

app.listen(port, console.log(`now live on port: ${port}!`));
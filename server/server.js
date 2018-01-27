const express = require('express');
const app = express();
const port = 4000;

const helpers = require('./helpers.js');

app.get('/', (req, res) => {
  res.send('this is where the app goes');
})

app.post('/getMap', (req, res) => {
  console.log('called');
  helpers.createMap('1, 2, 3, 4')


})

app.listen(port, console.log(`now live on port: ${port}!`));
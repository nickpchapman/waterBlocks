const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const renderUtils = require('./renderUtils.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('this is where the app goes');
});

app.post('/getMap', (req, res) => {
  console.log('called', req.body);
  let map = renderUtils.renderNewMap(req.body.walls);
  res.send(map);
});

app.listen(port, console.log(`now live on port: ${port}!`));
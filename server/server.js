const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const renderUtils = require('./renderUtils.js');

app.use(bodyParser.json());
app.use(express.static('client'))

app.post('/getMap', (req, res) => {
  renderUtils.renderNewMap(req.body.walls, (err, map) => {
    if (err) {
      console.log(err)
    } else {
      res.send(map);
    }
  })
});

app.listen(port, console.log(`now live on port: ${port}!`));
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data/data.js');
const cors = require('cors');
const updatedData = [];
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.json())

function addObjects (dataset) {
  data.happyData.map(item => {
    for (var i = 0; i < data.locationData.length; i++) {
      if (item.name === data.locationData[i].name) {
        var newObject = Object.assign(item, data.locationData[i])
        updatedData.push(newObject)
      }
      console.log(updatedData)
    } return happyData
  })
}

// console.log(happyData)

addObjects(data)

app.get('/', (req, res) => {
  res.json(updatedData);
});

app.listen(port, () => {
  console.log('listening here ', port);
});


app.post('/', (req, res) => {
  updatedData.push(req.body)
  res.json("It works")
});

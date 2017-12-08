const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data/data.js');
const cors = require('cors');
const updatedData = [];
const bodyParser = require('body-parser');
let happyData = data.happyData
let locationData = data.locationData

app.use(cors())
app.use(bodyParser.json())

function addObjects (array1, array2) {
  return array1.map(item => {
    for (var i = 0; i < array2.length; i++) {
      if (item.name === array2[i].name) {
        var newObject = Object.assign(item, array2[i])
        updatedData.push(newObject)
      }
    } return newObject;
  })
}

// console.log(happyData)

addObjects(happyData, locationData)

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

module.exports = {
  addObjects
}

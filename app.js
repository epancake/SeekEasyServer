const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data/data');
const cors = require('cors')

app.use(cors())

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log('listening here ', port);
});

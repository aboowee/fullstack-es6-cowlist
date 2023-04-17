const express = require('express');
const path = require('path');
const {insertCow: insertCow} = require('../database/db');
const {getCowList: getCowList} = require('../database/db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.post('/api/cows', (req, res) => {
  insertCow([req.body.cow, req.body.description], (err, result)=>{
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  })
  // insertCow([req.body.cow, req.body.description])
  // .then((data)=>{
  //   res.sendStatus(200)
  // })
  // .catch((err)=>{
  //   console.log(err);
  //   res.sendStatus(500)
  // })
})

app.get('/api/cows', (req, res) => {
  getCowList((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(result);
      res.send(result);
    }
  })
})


app.listen(PORT, () => {
  console.log(`Now listening on ${PORT}`)
})
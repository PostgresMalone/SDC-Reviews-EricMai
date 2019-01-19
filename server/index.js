const nr = require('newrelic')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const postgres = require('../database/postgresql.js')
const path = require('path');
var compression = require('compression')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression())
app.use(morgan('tiny'))
app.use('/room/:listing_id', express.static(__dirname + '/../public'));

app.get('/reviews', function (req, res) {
  // var listingId = req.params.id;
  // var limit = Number(req.query.limit);
  // var offset = Number(req.query.offset);
  console.log(req.params)
  let limit = req.query.limit;
  let listingid = req.query.id;
  postgres.save(listingid, limit, (reviews) => {
    res.send(reviews.rows);
  });
});

// app.post('/reviews',function (req, res){
//   postgres.add({},(reviews)=>{
//     res.send()
//   })
// })

// app.put('/reviews', function(req,res){
//   postgress.put({},(reviews)=>{
//     res.send()
//   })
// })

// app.delete('/reviews', function(req,res){
//   postgres.remove({},(reviews)=>{
//     res.send()
//   })
// })
const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
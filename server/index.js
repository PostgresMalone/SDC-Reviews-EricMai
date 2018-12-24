const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const retrieveFromDb = require('../database/index.js').retrieveFromDb;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.get('/:listing_id/reviews', function (req, res) {
  id = req.params.listing_id;
  retrieveFromDb(id, (reviews) => {
    console.log('AT SERVER', reviews[0]);
    res.send(reviews);
  });
});

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
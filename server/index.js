const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const retrieveFromDb = require('../database/index.js').retrieveFromDb;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.get('/:listing_id/reviews', function (req, res) {
  listingId = req.params.listing_id;
  retrieveFromDb(listingId, (reviews) => {
    res.send(reviews);
  });
});

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
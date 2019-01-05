const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://172.17.0.2/reviewDB', { useNewUrlParser: true }, err => {
  if (err) {
    return console.log('Failed in connecting to MongoDB.');
  }
  console.log('Connected to MongoDB!');
});

let reviewSchema = mongoose.Schema({
  id: {
    type: Number,
    min: 1,
    max: 3000,
    unique: true
  },
  listingId: {
    type: Number,
    min: 1,
    max: 100
  },
  content: String,
  reviewerName: String,
  reviewerPicture: String,
  hostComment: String,
  hostName: String,
  hostPicture: String,
  createdAt: { type: Date, required: true }
});

let Review = mongoose.model('Review', reviewSchema);

let save = () => {
  Review.deleteMany({}, (err) => {
    if (err) {
      console.error(err);
    } else {
      fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
        if (err) {
          return console.log('Error in reading file.', err);
        }
        const parsed = JSON.parse(data);
        Review.insertMany(parsed)
          .then(() => process.exit());
      });
    }
  });
};

let retrieveFromDb = (listingId, limit, offset, callback) => {
  Review.find({ listingId: listingId }, function (err, data) {
    if (err) {
      return console.log('ERROR at db', err);
    } else {
      callback(data);
    }
  }).limit(limit).skip(offset);
};

module.exports.save = save;
module.exports.retrieveFromDb = retrieveFromDb;
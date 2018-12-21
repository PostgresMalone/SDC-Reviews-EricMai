const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true }, err => {
  if (err) {
    return console.log('Failed in connecting to MongoDB.');
  }
  console.log('Connected to MongoDB!');
});

let repoSchema = mongoose.Schema({
  hostName: String,
  hostPicture: String,
  id: {
    type: Number,
    min: 1,
    max: 100,
    unique: true
  },
  reviews: [{
    content: String,
    hostComment: String,
    reviewerName: String,
    reviewerPicture: String,
  }]
});

let Repo = mongoose.model('Repo', repoSchema);

let save = () => {
  fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
    if (err) {
      return console.log('Error in reading file.', err);
    }
    const parsed = JSON.parse(data);
    parsed.forEach(data => {
      var repoTosave = new Repo(data);
      repoTosave.save((err) => {
        if (err) {
          return console.log('Error in saving.', err);
        }
        console.log('Success in saving!');
      });
    });
  });
};

save();

module.exports.save = save;
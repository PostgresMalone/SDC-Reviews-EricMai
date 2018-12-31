var faker = require('faker');
const save = require('../database/index.js').save;
const fs = require('fs');

var content = faker.lorem.paragraph;
var reviewerName = faker.name.findName;
var hostComment = faker.lorem.paragraph;
var hostName = faker.name.findName;
var hostPicture = 'http://lorempixel.com/150/150/';
var createdAt = faker.date.recent;


var allData = [];

const getRandomPhoto = () => {
  var number = Math.floor(Math.random() * (75 - 0 + 1));;
  var gender = 'women';
  if (Math.random() > 0.5) {
    gender = 'men';
  }

  return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
}

const singleReviewGenerator = (i) => {

  var reviewObj = {
    id: i + 1,
    listingId: (i % 100) + 1,
    content: content(),
    reviewerName: reviewerName(),
    reviewerPicture: getRandomPhoto(),
    hostComment: hostComment(),
    hostName: hostName(),
    hostPicture: getRandomPhoto(),
    createdAt: createdAt(),
  };
  return reviewObj;
};

const reviewListGenerator = () => {
  for (var i = 0; i < 3000; i++) {
    reviewItem = singleReviewGenerator(i);
    allData.push(reviewItem);
  }
};

reviewListGenerator();
fs.writeFile('./database/data.txt', JSON.stringify(allData), (err, data) => {
  if (err) {
    return console.log('Error in writing', err);
  }
  save();
});



var faker = require('faker');
const save = require('../database/index.js').save;
const fs = require('fs');

var content = faker.lorem.paragraph;
var reviewerName = faker.name.findName;
var hostComment = faker.lorem.paragraph;
var hostName = faker.name.findName;
var createdAt = faker.date.recent;

var allData = [];

const getRandomPhoto = () => {
  var number = Math.floor(Math.random() * 75); // there are 75 random pictures
  var gender = 'women';
  if (Math.random() > 0.5) {
    gender = 'men';
  }

  return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
}

//generating host information in a map to keep host name and pictures consistent
var numberOfListings = 100;
var numberOfHosts = numberOfListings;
var numberOfReviews = 3000;

var hostInfoMap = {};

for (var i = 1; i <= numberOfHosts; i++) {
  hostInfoMap[i] = {
    'hostName': hostName(),
    'hostPicture': getRandomPhoto()
  };
}

const singleReviewGenerator = (i) => {
  var listingId = (i % numberOfListings) + 1
  var reviewObj = {
    id: i + 1,
    listingId: listingId,
    content: content(),
    reviewerName: reviewerName(),
    reviewerPicture: getRandomPhoto(),
    hostComment: hostComment(),
    hostName: hostInfoMap[listingId].hostName,
    hostPicture: hostInfoMap[listingId].hostPicture,
    createdAt: createdAt(),
  };
  return reviewObj;
};

const reviewListGenerator = () => {
  for (var i = 0; i < numberOfReviews; i++) {
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



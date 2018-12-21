var faker = require('faker');
const fs = require('fs');

var hostName = faker.name.findName;
var hostPicture = 'http://lorempixel.com/150/150/';
var content = faker.lorem.paragraph;
var hostComment = faker.lorem.paragraph;
var reviewerName = faker.name.findName;
var reviewerPicture = 'http://lorempixel.com/150/150/';

var totalData = [];

const reviewGenerator = () => {
  var reviewObj = {
    content: content(),
    hostComment: hostComment(),
    reviewerName: reviewerName(),
    reviewerPicture: reviewerPicture
  };
  return reviewObj;
};

const singleDataGenerator = (j) => {
  var reviewList = [];
  for (var i = 0; i < 8; i++) {
    reviewItem = reviewGenerator();
    reviewList.push(reviewItem);
  }
  var compiled = {
    hostName: hostName(),
    hostPicture: hostPicture,
    id: j,
    reviews: reviewList
  };
  return compiled;
};

const totalDataGenerator = () => {
  for (var j = 1; j < 101; j++) {
    j = j;
    data = singleDataGenerator(j);
    totalData.push(data);
  }
  return totalData;
};
totalDataGenerator();
fs.writeFile('data.txt', JSON.stringify(totalData), (err, data) => {
  if (err) {
    return console.log('Error in writing', err);
  }
  console.log('Success!');
});



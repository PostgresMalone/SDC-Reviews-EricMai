const stringify = require("csv-stringify");
const fs = require("fs");
const faker = require("faker");

let randomName = faker.name.findName;
let content = faker.lorem.paragraph;
let sentence = faker.lorem.sentences;
let reviewerName = faker.name.findName;
let hostComment = faker.lorem.paragraph;
let createdAt = faker.date.recent;
let randomNumber = faker.random.number
let now = Date.now()/1000
let start = 0
//10mil- host
//30mil- user
//300mill- comments
const ExampleData = 
{"id":1,
"listingId":1,
"content":"Commodi vel aut accusantium. Eveniet omnis quas occaecati culpa eum quam. Et officiis et. Et tempora in quam magnam dolore. Maxime consequuntur vero est.",
"reviewerName":"Adriana Reynolds",
"reviewerPicture":"https://randomuser.me/api/portraits/men/23.jpg",
"hostComment":"Dolor occaecati quibusdam sint consequatur est sunt deserunt. Accusantium asperiores consectetur exercitationem. Reprehenderit sit eaque. Itaque optio rerum rem eum. Sequi porro quia nam beatae cumque. Enim incidunt est fugiat inventore.",
"hostName":"River DuBuque",
"hostPicture":"https://randomuser.me/api/portraits/men/39.jpg",
"createdAt":"2019-01-05T08:01:18.798Z"}

let data = [];
let columns = {
  id : 'id',
  listingId : 'listingId',
  content : 'content',
  reviewerName : 'reviewerName',
  reviewerPicture : 'reviewerPicture',
  hostComment : 'hostComment',
  hostName: 'hostName',
  hostPicture: 'hostPicture',
  createdAt: 'createdAt'
};
//100mil
for(let j = 0; j<2; j++){
  const stream = fs.createWriteStream('review.csv', {flags : 'w'})
  
  for (let i = 0; i < 500000;   i++) {
    let roomId = randomNumber(({'min': 0 , 'max':10000000}))
    let userID = randomNumber({ 'min': 0 , 'max': 30000000})
    data.push([start, roomId ,sentence(), userID  ,userID, sentence(), roomId , roomId, createdAt()]);
    start++
  }
  
  stringify(data, { header: true, columns }, (err, output) => {
    if (err) {
      throw err;
    } else {
      fs.writeFileSync(`./Reviews/my${j}.csv`, output, err => {
        if (err) {
          throw err;
        } else {
            console.log(Date.now()/1000 - now)
        }
      });
    }
  });
}


const stringify = require("csv-stringify");
const fs = require("fs");
const faker = require("faker");

let randomName = faker.name.findName;
let content = faker.lorem.paragraph;
let sentence = faker.lorem.sentences;
let reviewerName = faker.name.findName;
let hostComment = faker.lorem.paragraph;
let createdAt = faker.date.recent;
let randomNumber = faker.random.number;
let now = Date.now() / 1000;
let start = 0;
//10mil- host
//30mil- user
//300mill- comments
const ExampleData = {
  id: 1,
  listingId: 1,
  content:
    "Commodi vel aut accusantium. Eveniet omnis quas occaecati culpa eum quam. Et officiis et. Et tempora in quam magnam dolore. Maxime consequuntur vero est.",
  reviewerName: "Adriana Reynolds",
  reviewerPicture: "https://randomuser.me/api/portraits/men/23.jpg",
  hostComment:
    "Dolor occaecati quibusdam sint consequatur est sunt deserunt. Accusantium asperiores consectetur exercitationem. Reprehenderit sit eaque. Itaque optio rerum rem eum. Sequi porro quia nam beatae cumque. Enim incidunt est fugiat inventore.",
  hostName: "River DuBuque",
  hostPicture: "https://randomuser.me/api/portraits/men/39.jpg",
  createdAt: "2019-01-05T08:01:18.798Z"
};
let data = ()=>{
  //max 10000000
    let roomId = randomNumber({ min: 0, max: 1000 });
  //max 30000000
    let userID = randomNumber({ min: 0, max: 1000 });
    return [
      start,
      roomId,
      sentence(),
      userID,
      sentence(),
      createdAt()
    ].join()+'\n';
} ;
let column = ["id","listingId","content","userid","hostComment", "createdAt"]
//100mil
//2000
for (let j = 0; j < 1; j++) {
    const stream = fs.createWriteStream(`./TestingData/ReviewFiles/my${j}.csv`);
    stream.write(column.join() + '\n')
    writeOneMillionTimes(stream, data )
}
//75000
function writeOneMillionTimes(writer, data) {
    let i = 100000;
    write();
    async function write() {
      let ok = true;
      while (i > 0 && ok){
        i--;
        if (i === 0) {
          writer.write(data());
          start++
        } else {
          ok = writer.write(data());
          start++
        }
      } 
      if (i > 0) {
        await writer.once('drain', write);

      }
    }
  }


console.log(Date.now() /1000 - now)
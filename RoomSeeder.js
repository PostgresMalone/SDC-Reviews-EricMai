const stringify = require("csv-stringify");
const fs = require("fs");
const faker = require("faker");

let randomName = faker.name.findName;
let content = faker.lorem.paragraph;
let sentence = faker.lorem.sentences;
let ranNames = faker.name.findName;
let hostComment = faker.lorem.paragraph;
let createdAt = faker.date.recent;
let randomNumber = faker.random.number;
let now = Date.now() / 1000;
let start = 0;
//10mil- host
//30mil- user
//300mill- comments
// const ExampleData = {
//   id: 1,
//   listingId: 1,
//   content:
//     "Commodi vel aut accusantium. Eveniet omnis quas occaecati culpa eum quam. Et officiis et. Et tempora in quam magnam dolore. Maxime consequuntur vero est.",
//   reviewerName: "Adriana Reynolds",
//   reviewerPicture: "https://randomuser.me/api/portraits/men/23.jpg",
//   hostComment:
//     "Dolor occaecati quibusdam sint consequatur est sunt deserunt. Accusantium asperiores consectetur exercitationem. Reprehenderit sit eaque. Itaque optio rerum rem eum. Sequi porro quia nam beatae cumque. Enim incidunt est fugiat inventore.",
//   hostName: "River DuBuque",
//   hostPicture: "https://randomuser.me/api/portraits/men/39.jpg",
//   createdAt: "2019-01-05T08:01:18.798Z"
// };
let data = () => {
  let picture = randomNumber({ min: 0, max: 99 });
  let gender = ["men", "women"];
  let gPicker = randomNumber({ min: 0, max: 1 });

  return (
    [
      start,
      ranNames(),
      `https://randomuser.me/api/portraits/${gender[gPicker]}/${picture}.jpg`,
      createdAt()
    ].join(",") + "\n"
  );
};
let column = ['id', 'hostName', 'hostPicture', 'createdAt'];
//10mil

for (let j = 0; j < 1; j++) {
  const stream = fs.createWriteStream(`./TestingData/listingfiles/my${j}.csv`);
  stream.write(column.join(',') + '\n');
  writeOneMillionTimes(stream, data);
}

function writeOneMillionTimes(writer, data) {
  let i = 10000;
  write();
  async function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      if (i === 0) {
        writer.write(data());
        start++;
      } else {
        ok = writer.write(data());
        //   console.log(ok)
        start++;
      }
    }
    if (i > 0) {
      await writer.once('drain', write);
    }
  }
}

console.log(Date.now() / 1000 - now);

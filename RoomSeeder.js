const fs = require("fs");
const faker = require("faker");

const ranNames = faker.name.findName;
const createdAt = faker.date.recent;
const randomNumber = faker.random.number;
const now = Date.now() / 1000;
const start = 0;
//10mil- host
//30mil- user
//300mill- comments

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
    ].join() + "\n"
  );
};
const column = ['id', 'hostName', 'hostPicture', 'createdAt'];
//10mil

for (let j = 0; j < 1; j++) {
  const stream = fs.createWriteStream(`./TestingData/listingfiles/my${j}.csv`);
  stream.write(column.join() + '\n');
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
        start++;
      }
    }
    if (i > 0) {
      await writer.once('drain', write);
    }
  }
}

console.log(Date.now() / 1000 - now);

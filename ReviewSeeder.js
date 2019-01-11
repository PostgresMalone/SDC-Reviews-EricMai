const fs = require("fs");
const faker = require("faker");

const sentence = faker.lorem.sentences;
const createdAt = faker.date.recent;
const randomNumber = faker.random.number;
const now = Date.now() / 1000;
const start = 0;
//10mil- host
//30mil- user
//300mill- comments

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
const column = ["id","listingId","content","userid","hostComment", "createdAt"]
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
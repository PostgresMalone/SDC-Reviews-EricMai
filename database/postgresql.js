const pg = require("pg");
const config = require('./pg_config.js')
// const connection = 'postgres://localhost:5432/sdctesting'
const client = new pg.Client(config);

client.connect();

const save = (listingid, limit, callback) => {
  query = `SELECT * FROM listing 
      INNER JOIN reviews ON listing.id = reviews.listingid 
      INNER JOIN users ON reviews.userid = users.id
      WHERE listingid =${listingid}
      LIMIT ${limit}`;
  client.query(query, (err, data) => {
    if (err) {
      throw err;
    }
    callback(data);
  });
};

module.exports = {
  save
};

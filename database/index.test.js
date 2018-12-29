const retrieveFromDb = require('./index.js').retrieveFromDb;

test('retrieves data from DB', done => {

  function callback(data) {
    expect(data.hostName).toEqual('Yesenia Murazik');
    done();
  }
  retrieveFromDb(1, callback);
});
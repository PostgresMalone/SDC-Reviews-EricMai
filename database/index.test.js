const retrieveFromDb = require('./index.js').retrieveFromDb;

test('check if limit is working', done => {
  var limit = 5;
  function callback(data) {
    expect(data.length).toEqual(limit);
    done();
  }
  retrieveFromDb(1, limit, 0, callback);
});


test('check if offset is working', done => {
  var offset = Number.MAX_SAFE_INTEGER;
  function callback(data) {
    expect(data.length).toEqual(0);
    done();
  }
  retrieveFromDb(1, 1, offset, callback);
});


test('check review content is correct', done => {
  function callback(data) {
    // checking a bunch of fields to be defined
    expect(data[0].id).toBeDefined();
    expect(data[0].listingId).toBeDefined();
    expect(data[0].content).toBeDefined();
    expect(data[0].hostName).toBeDefined();
    done();
  }
  retrieveFromDb(1, 1, 0, callback);
});
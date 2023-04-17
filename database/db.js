const mysql = require('mysql2');
const Promise = require('bluebird');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'CowList'
})

db.connect(() => {
  console.log('Now Connected to CowList Database')
})

const insertCow = (input, callback) => {
  db.query("INSERT IGNORE INTO cows (name, description) VALUES (?, ?)", input, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
}

const getCowList = (callback) => {
  db.query("SELECT * FROM cows", (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result)
    }
  })
}
// const queryAsync = Promise.promisifyAll(db);

// const insertCow = (input, callback) => {
//   return db.queryAsync("INSERT IGNORE INTO cows (name, description) VALUES (?, ?)", input)
// }

module.exports.insertCow = insertCow;
module.exports.getCowList = getCowList;
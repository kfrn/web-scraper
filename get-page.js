// Function to return HTML of page

var request = require('superagent')

function getPage (url) {
  return new Promise (function (resolve, reject) {
    request
    .get(url)
    .end(function(err, res) {
      if (err) {
        reject(err)
        console.log("error");
      } else {
        res = JSON.stringify(res)
        resolve(res)
      }
    })
  })
}

module.exports = getPage

getPage("http://knexjs.org/")
  .then (function(result) {
    console.log(result);
  })
  .catch (function(error) {
    console.log(error);
  })

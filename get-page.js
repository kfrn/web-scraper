var request = require('superagent')

module.exports = getPage

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

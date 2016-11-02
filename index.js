var getPage = require('./get-page')
var extractURLs = require('./extract-URLs')
var saveURLs = require('./save-URLs')

getPage("https://kfrn.github.io/")
  .then (function(result) {
    // console.log(result);
    extractURLs(result)
    console.log(extractURLs(result));
  })
  .catch (function(error) {
    console.log(error);
  })

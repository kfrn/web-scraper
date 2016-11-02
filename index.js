var getPage = require('./get-page')
var extractURLs = require('./extract-URLs')
var saveURLs = require('./save-URLs')

getPage("https://kfrn.github.io/")
  .then (function(result) {
    // console.log(result);
    var URLarray = extractURLs(result)
    console.log("Extracted URLs are:", extractURLs(result));
    saveURLs(URLarray)
  })
  .catch (function(error) {
    console.log(error);
  })

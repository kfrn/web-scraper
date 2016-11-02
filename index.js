var getPage = require('./get-page')
var extractURLs = require('./extract-URLs')
var saveURLs = require('./save-URLs')

getPage("http://www.imdb.com/search/title?count=3000&countries=it&sound_mixes=silent&sort=release_date,asc")
  .then (function(result) {
    // console.log(result);
    var URLarray = extractURLs(result)
    console.log("Extracted URLs are:", extractURLs(result));
    saveURLs(URLarray, 'URLs_01.txt')
  })
  .catch (function(error) {
    console.log(error);
  })

var getPage = require('./functions/get-page')
var extractURLs = require('./functions/extract-URLs')
var saveData = require('./functions/save-data')

getPage("http://www.imdb.com/search/title?release_date=1895-01-01,1895-06-30&sort=year,asc&sound_mixes=silent")
  .then (function(result) {
    // console.log(result);
    var URLarray = extractURLs(result)
    console.log("Extracted URLs are:", extractURLs(result));
    saveData(URLarray, 'URLs_08.txt')
  })
  .catch (function(error) {
    console.log(error);
  })

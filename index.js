var getPage = require('./get-page')
var extractURLs = require('./extract-URLs')
var saveData = require('./save-data')

getPage("http://www.imdb.com/search/title?count=200&countries=it&release_date=1923-11,&sound_mixes=silent&sort=release_date,asc&page=3&ref_=adv_nxt")
  .then (function(result) {
    // console.log(result);
    var URLarray = extractURLs(result)
    console.log("Extracted URLs are:", extractURLs(result));
    saveData(URLarray, 'URLs_08.txt')
  })
  .catch (function(error) {
    console.log(error);
  })

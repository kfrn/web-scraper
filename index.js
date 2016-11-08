var getPage = require('./functions/get-page')
var extractURLs = require('./functions/extract-URLs')
var saveData = require('./functions/save-data')
var extractIMDbID = require('./functions/extractIMDbID')

getPage("http://www.imdb.com/search/title?release_date=1895-01-01,1895-06-30&sort=year,asc&sound_mixes=silent")
  .then (function(result) {
    var URLdata = extractURLs(result)
    var cleanURLs = extractIMDbID(URLdata)
    console.log("Extracted IMDB IDs are:", cleanURLs)
  })
  .catch (function(error) {
    console.log(error);
  })

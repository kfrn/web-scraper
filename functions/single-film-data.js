var cheerio = require('cheerio')
var request = require('superagent')
var getPage = require('./get-page')


module.exports = getFilmData

function getFilmData(html) {
  $ = cheerio.load(html)

  var castList = []
  var castNthChild = 2
  for (var i = 0; i < 15; i++) {
    castCheerio = '#titleCast > table > tr:nth-child(' + castNthChild + ') > td.itemprop > a > span'
    castList.push($(castCheerio).html())
    castNthChild++
  }

  var genreList = []
  var genreNthChild = 2
  for (var j = 0; j < 10; j++) {
    genreCheerio = '#titleStoryLine > div:nth-child(10) > a:nth-child(' + genreNthChild + ')'
    if ( $(genreCheerio).html() !== null ) {
      genreList.push($(genreCheerio).html())
    }
    genreNthChild +=2
  }

  var filmData = {
    director: $('div.credit_summary_item span a span').html(),
    country: $('#titleDetails .txt-block a').html(),
    // synopsis: $('#titleStoryLine div p').html()
    cast: castList,
    genres: genreList
  }

  return filmData
}


getPage("http://www.imdb.com/title/tt0003740/?ref_=fn_al_tt_1")
  .then (function(result) {
    var extractedData = getFilmData(result)
    console.log("extractedData is:", extractedData)
  })
  .catch (function(error) {
    console.log(error);
  })

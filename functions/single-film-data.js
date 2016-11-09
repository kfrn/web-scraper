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
    if ( $(castCheerio).html() !== null ) {
      castList.push($(castCheerio).html())
    }
    castNthChild++
  }

  var genreList = []
  var genreNthChild = 2
  for (var j = 0; j < 10; j++) {
    genreCheerio = '#titleStoryLine > div:nth-child(10) > a:nth-child(' + genreNthChild + ')'
    if ( $(genreCheerio).html() !== null ) {
      genreList.push($(genreCheerio).html())
    }
    genreNthChild += 2
  }

  var durationList = []
  var durationNthChild = 2
  for (var k = 0; k < 5; k++) {
    durationCheerio = '#titleDetails > div:nth-child(13) > time:nth-child(' + durationNthChild + ')'
    if ($(durationCheerio).html() !== null) {
      durationList.push($(durationCheerio).html())
    }
    durationNthChild += 2
  }


  var filmData = {
    director: $('div.credit_summary_item span a span').html(),
    country: $('#titleDetails .txt-block a').html(),
    company: $('#titleDetails > div:nth-child(9) > span:nth-child(2) > a > span').html(),
    cast: castList,
    genres: genreList,
    altTitle: $('#titleDetails > div:nth-child(6)').html().replace(/\<h4.{5,}\<\/h4\>/, "").replace(/\<span.{5,}\n.*\n.{5,}/, "").trim(),
    origTitle: $('#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1').html().replace(/\&.+/, ""),
    colourBW: $('#titleDetails > div:nth-child(15) > a').html().trim(),
    duration: durationList
  }

  return filmData
}


getPage("http://www.imdb.com/title/tt0003489/?ref_=fn_al_tt_7")
  .then (function(result) {
    var extractedData = getFilmData(result)
    console.log("extractedData is:", extractedData)
  })
  .catch (function(error) {
    console.log(error);
  })

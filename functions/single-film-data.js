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

  var directorList = []
  var directorNthChild = 2
  for (var l = 0; l < 5; l++) {
    directorCheerio = '#title-overview-widget > div.minPosterWithPlotSummaryHeight > div.plot_summary_wrapper > div.plot_summary.minPlotHeightWithPoster > div:nth-child(2) > span:nth-child(' + directorNthChild + ') > a > span'
    if ($(directorCheerio).html() !== null) {
      directorList.push($(directorCheerio).html())
    }
    directorNthChild++
  }

  var writerList = []
  var writerNthChild = 2
  for (var l = 0; l < 5; l++) {
    writerCheerio = '#title-overview-widget > div.minPosterWithPlotSummaryHeight > div.plot_summary_wrapper > div.plot_summary.minPlotHeightWithPoster > div:nth-child(2) > span:nth-child(' + writerNthChild + ') > a > span'
    if ($(writerCheerio).html() !== null) {
      writerList.push($(writerCheerio).html())
    }
    writerNthChild++
  }

  var filmData = {
    directors: directorList,
    country: $('#titleDetails .txt-block a').html(),
    company: $('#titleDetails > div:nth-child(9) > span:nth-child(2) > a > span').html(),
    cast: castList,
    writers: writerList,
    genres: genreList,
    altTitle: $('#titleDetails > div:nth-child(6)').html().replace(/\<h4.{5,}\<\/h4\>/, "").replace(/\<span.{5,}\n.*\n.{5,}/, "").trim(),
    origTitle: $('#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1').html().replace(/\&.+/, ""),
    duration: durationList,
    releaseDate: $('#titleDetails > div:nth-child(5)').html().replace(/\<h4.{5,}\<\/h4\>/, "").replace(/\<span.{5,}\n.*\n.{5,}/, "").trim(),
    language: $('#titleDetails > div:nth-child(4) > a').html(),
    synopsis: $('#titleStoryLine > div:nth-child(3) > p').html().replace(/\<em.{5,}\n.{5,}/, "").trim()
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

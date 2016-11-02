var cheerio = require('cheerio')

module.exports = extractURLs

function extractURLs(html) {
  $ = cheerio.load(html)

  var URLlist = [];

  URLs = $('a').each(function() {
    URLlist.push($(this).attr('href'))
  })

  return URLlist
}


// Testing

// var HTMLstring = "sdfsdafsadf<a href='google.com'</a>sfjklfjsjkl<a href='yahoo.com'></a>"
// extractURLs(HTMLstring)

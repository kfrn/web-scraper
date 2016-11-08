var cheerio = require('cheerio')

module.exports = extractURLs

function extractURLs(html) {
  $ = cheerio.load(html)

  var URLlist = [];

  URLs = $('.lister-item-header a').each(function() {
    URLlist.push($(this).attr('href'))
  })

  return URLlist
}


// Testing

// var HTMLstring = "sdfsdafsadf<a href='google.com'</a>sfjklfjsjkl<a href='yahoo.com'></a>"
// extractURLs(HTMLstring)

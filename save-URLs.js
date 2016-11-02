var fs = require('fs')

module.exports = saveURLs

function saveURLs(URLs, filename) {
  fs.writeFile(filename, URLs, function(err) {
    if (err) throw error
    console.log("Saved!");
  })
}


// For Testing

// var URLarray = [ 'index.html',
//   'blog/c1-reflection-blog.html',
//   'blog/c1-time-and-habits-blog.html',
//   'blog/t2-html-css-dom-p1.html',
//   'blog/t2-html-css-dom-p2.html' ]
// saveURLs(URLarray)

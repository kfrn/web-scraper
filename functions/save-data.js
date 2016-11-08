var fs = require('fs')

module.exports = saveData

function saveData(data, filename) {
  fs.writeFile(filename, data, function(err) {
    if (err) throw error
    console.log("Saved!");
  })
}


// // Testing
// var URLarray = [ 'index.html',
//   'blog/c1-reflection-blog.html',
//   'blog/c1-time-and-habits-blog.html',
//   'blog/t2-html-css-dom-p1.html',
//   'blog/t2-html-css-dom-p2.html' ]
// saveURLs(URLarray)

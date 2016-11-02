var getPage = require('./get-page')

getPage("http://knexjs.org/")
  .then (function(result) {
    console.log(result);
  })
  .catch (function(error) {
    console.log(error);
  })

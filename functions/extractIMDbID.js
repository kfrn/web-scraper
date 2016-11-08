module.exports = extractIMDbID

function extractIMDbID (array) {
  var IMDbIDs = array.map(elem => elem.match(/tt\d+/))
  return refineResults = IMDbIDs.map(elem => elem[0])
  // console.log(refineResults);
}


// // Testing
// var testData = [ '/title/tt0000010/?ref_=adv_li_tt',
//   '/title/tt0000013/?ref_=adv_li_tt',
//   '/title/tt0192982/?ref_=adv_li_tt',
//   '/title/tt0187702/?ref_=adv_li_tt']
// extractIMDbID(testData)

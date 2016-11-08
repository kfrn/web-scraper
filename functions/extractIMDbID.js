module.exports = extractIMDbID

function extractIMDbID (testData) {
  var IMDbIDs = testData.map(elem => elem.match(/tt\d+/)[0])
  console.log(IMDbIDs);
}


// Testing
var testData = [ '/title/tt0000010/?ref_=adv_li_tt',
  '/title/tt0000013/?ref_=adv_li_tt',
  '/title/tt0192982/?ref_=adv_li_tt',
  '/title/tt0187702/?ref_=adv_li_tt',
  '/title/tt0243675/?ref_=adv_li_tt',
  '/title/tt0416191/?ref_=adv_li_tt',
  '/title/tt0416190/?ref_=adv_li_tt',
  '/title/tt0416193/?ref_=adv_li_tt',
  '/title/tt0415775/?ref_=adv_li_tt',
  '/title/tt1496763/?ref_=adv_li_tt' ]

extractIMDbID(testData)

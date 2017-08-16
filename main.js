var google = require('googleapis');
var sheets = google.sheets('v4');
require('dotenv').config();

var request = {
  spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',
  ranges: 'R1C1:R10C10',
  includeGridData: false,
  auth: process.env.API_KEY
};

// GET data from Learn Mapping Sheet ('Learn Mapping')

// sheets.spreadsheets.get(request, function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     let learnMappingSheet = response.sheets.find(function(sheet) {
//       return sheet.properties.title === 'Learn Mapping'
//     });
//     console.log('Learn Mapping Info:' + learnMappingSheet);
//   };
// });


// GET data from survey responses ('Form Responses 1')
sheets.spreadsheets.values.get({
  spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',
  range: 'R1C1:R40C10',
  auth: process.env.API_KEY,
}, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

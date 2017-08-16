var google = require('googleapis');
var sheets = google.sheets('v4');
require('dotenv').config()

var request = {
    // The spreadsheet to request.
    spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',  // TODO: Update placeholder value.
    // The ranges to retrieve from the spreadsheet.
    ranges: ["R1C1:R50C10"],

    // True if grid data should be returned.
    // This parameter is ignored if a field mask was set in the request.
    includeGridData: false,  // TODO: Update placeholder value.
    auth: process.env.API_KEY
  };

// sheets.spreadsheets.get(request, function(err, response) {
//   if (err) {
//     console.error(err);
//   } else {
//     let learnMappingSheet = response.sheets.find(function(sheet) {
//       return sheet.properties.title === 'Learn Mapping'
//     })
//     console.log(learnMappingSheet);
//   }
// });

// GET data from survey responses ('Form Responses 1')
sheets.spreadsheets.values.get({
   spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',
   range: "R1C1:R40C10",
   auth: process.env.API_KEY,
}, function(err, result) {
  if(err) {
    // Handle error
    console.log(err);
  } else {
    var numRows = result.values ? result.values.length : 0;
    console.log(result);
  }
});

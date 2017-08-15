var google = require('googleapis');
var sheets = google.sheets('v4');
require('dotenv').config()

var request = {
    // The spreadsheet to request.
    spreadsheetId: '1yVuMt6LMTlq-4cyvVTvq776Dj0wjJjEulbaX_qWriVs',  // TODO: Update placeholder value.

    // The ranges to retrieve from the spreadsheet.
    // ranges: [],  // TODO: Update placeholder value.

    // True if grid data should be returned.
    // This parameter is ignored if a field mask was set in the request.
    includeGridData: false,  // TODO: Update placeholder value.
    auth: process.env.API_KEY
  };

sheets.spreadsheets.get(request, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    let learnMappingSheet = response.sheets.find(function(sheet) {
      return sheet.properties.title === 'Learn Mapping'
    })
    console.log(learnMappingSheet);
  }
});

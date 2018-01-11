var request = require('request');
// request('http://www.omdbapi.com/?apikey=trilogy&s=Big', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });



function getMovie(){
	request('http://www.omdbapi.com/?apikey=trilogy&s=Big', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});
}

module.exports = requestApi;
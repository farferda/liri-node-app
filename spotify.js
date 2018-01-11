var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: '1c239975559846be855597c418b9d255',
//   secret: '0fb023d117ac4706885088ed07599d20'
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log('this is the data found',data.tracks); 
// });


function spotifyApi(){
	var spotify = new Spotify({
	  id: '1c239975559846be855597c418b9d255',
	  secret: '0fb023d117ac4706885088ed07599d20'
	});
	 
	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
	  	if (err) {
	    	return console.log('Error occurred: ' + err);
	 	}
	 
		console.log('this is the data found',data.tracks); 
	});
}

module.exports = spotifyApi;
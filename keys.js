var Twitter = require('twitter');

console.log('ALL GOOD');

function twitterApi(){
	var client = new Twitter({
	  	consumer_key: "3mMw3crquKhoEbdTciJTtst2R",   
		consumer_secret: "SCFjFoNnXPqz0a4PJ6x2lmGWhrfqDGhZKiu3y6PwldfH4p1GsV",   
		access_token_key: "142338635-yuf5ulYS47bE5AbJs1hZHRMiaTWvwZxl2RohXrOu",   
		access_token_secret: "DGA55bTHk7xEo5A6A3Tc7irac9288rFMm5aVj78UluvxN"
	});
	 
	var params = {screen_name: 'farferda'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    		console.log(tweets[0].text);
	    	for (var i = tweets.length - 1; i >= 0; i--) {
	    		tweets[i]
	    		console.log(tweets[i].text)
	    	}
  		}
	});
}

module.exports = twitterApi;
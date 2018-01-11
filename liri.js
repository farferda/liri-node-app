var twitterImport = require("./keys.js");
var spotifyImport = require("./spotify.js");
var requestImport = require('./movie.js')
var apiSelection = process.argv[2] 

if(apiSelection === "twitter"){
	twitterImport();
} else if(apiSelection === "spotify") {
	spotifyImport();
} else if(apiSelection === "request"){
	requestImport();
}



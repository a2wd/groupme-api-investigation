var https = require("https")

var tokens = require("../common/readTokens.js")
var botCode = tokens.bots.ChickenNugget;

var botUrl = "https://api.groupme.com/v3/bots/post"

var message = {
	"text": "It is now " + new Date(),
	"bot_id": botCode
}

var options = {
	hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
}

https.request(options, function(res){
	if(res.statusCode != 202) {
		console.log("Bad status code")
	}
}).end(JSON.stringify(message))
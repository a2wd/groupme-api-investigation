var fs = require("fs")
var tokensPath = "../accessTokens.json"

module.exports = JSON.parse(fs.readFileSync(tokensPath, "utf-8"))
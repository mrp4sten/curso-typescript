const util = require("./util.js")

function registerProfile(email) {
  util.log(`[REGISTER] ${email}`)
}

registerProfile('mau@test.com')
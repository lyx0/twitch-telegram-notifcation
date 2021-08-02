const chalk = require("chalk");
const log = console.log;

const twitchClient = require("./clients/twitch");
const telegramClient = require("./clients/telegram");

twitchClient.initialize();

// telegramClient.listen(8080, function listen() {
//     console.log("Listening on port 8080");
// });

const chalk = require("chalk");
const log = console.log;

const twitchClient = require("./clients/twitch");
const telegramClient = require("./clients/telegram");

const telegramChatId = process.env.TELEGRAM_CHAT_ID;

const nameToPing = "noury";

twitchClient.initialize();

twitchClient.on("PRIVMSG", (msg) => {
    if (!msg.messageText.toLowerCase().includes(nameToPing)) {
        return;
    } else {
        const messageStr = `#[${msg.channelName}] ${msg.senderUsername}: ${msg.messageText}`;
        telegramClient.sendMessage(telegramChatId, messageStr);
    }
});

// telegramClient.listen(8080, function listen() {
//     console.log("Listening on port 8080");
// });

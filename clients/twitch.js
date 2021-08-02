const {
    ChatClient,
    AlternateMessageModifier,
    UserStateTracker,
    SlowModeRateLimiter,
} = require("dank-twitch-irc");
const chalk = require("chalk");
const log = console.log;

require("dotenv").config();

const client = new ChatClient({
    username: "justinfan12345",
    rateLimits: "default",
    ignoreUnhandledPromiseRejections: true,
});

// Allows the bot to send the same message
client.use(new AlternateMessageModifier(client));

// Allows the bot to know if they're mod/vip/sub or pleb
client.use(new UserStateTracker(client));

// Rate Limiter so we don't get globaled
client.use(new SlowModeRateLimiter(client, 2));

client.initialize = async () => {
    await client.joinAll("nouryqt", "noemience", "elajjaz", "pajlada", "zneix");
    await client.connect();
};

client.on("ready", () => {
    log(chalk.bold.green("[TWITCH] Successfully connected to chat"));
});

client.on("close", (error) => {
    if (error != null) {
        log(chalk.bold.red("Client closed due to error", error));
    }
});

client.on("PRIVMSG", (msg) => {
    log(chalk.white(`[TWITCH] [#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`));
});

module.exports = client;

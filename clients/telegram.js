const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    console.log(chatId);
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Received your message");
});

module.exports = bot;

import telebot from "telebot";

const bot = new telebot(process.env.TELEGRAM_TOKEN || "YOUR_TOKEN_HERE");
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello World!");
})
bot.start();
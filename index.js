import telebot from "telebot";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

console.log(process.env.TELEGRAM_TOKEN);

// Verificar si el token de Telegram está definido en las variables de entorno
const telegramToken = process.env.TELEGRAM_TOKEN || "YOUR_TOKEN_HERE";
const bot = new telebot(telegramToken);

// Escuchar los mensajes entrantes y responder con "Hello World!"
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello World!");
});

// Iniciar el bot
bot.start();

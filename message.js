const Discord = require("discord.js");

module.exports = function MessageHandler(rawmessage) {
const message = Discord.Message(rawmessage)
if (message.content)
}
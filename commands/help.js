const Discord = require("discord.js");
module.exports = {
    modulename:"help",
    execute(message, args) {
        const helpmainpage = new Discord.MessageEmbed()
        .setColor("#2BA7FF")
        .setTitle("Command help")
        message.channel.send({ embeds:[helpmainpage]})
    }

}
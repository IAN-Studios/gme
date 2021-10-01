const Discord = require("discord.js");

const TokenList = require("../token.json"); // Important for hosting.
const config = require("./configuration.json");

class GME {
    constructor() {

        this.client;
        const client = new Discord.Client();
        this.client = client;

        client.on("message", message => {})

        client.login(TokenList.GME_TOKEN).then(() => {
        this.load();
        });
}
load() {
    this.client.user.setActivity(config.status, {type:"COMPETING"})
}
} module.exports = {GME};
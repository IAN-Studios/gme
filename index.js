const Discord = require("discord.js");
const colors = require ("colors")

const TokenList = require("../token.json"); // Important for hosting.
const config = require("./configuration.json")

class GME {
    constructor() {

        this.client;
        const client = new Discord.Client();
        this.client = client;

        // Definiions
        
            const prefix = config.global_prefix;

        // Events

        client.on("debug", message => {
            console.debug(message)
        });

        client.on("message", message => {
        });

        client.login(TokenList.GME_TOKEN).then(() => {
        this.load();
        });
}ggfgggycfyjfgvvgjhgvhcfhcchgghcfhgvgnvgvgv

load() {
    this.client.user.setActivity(config.status, {type:"COMPETING"})
}
} module.exports = {GME};

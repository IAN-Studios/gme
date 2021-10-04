const Discord = require("discord.js");
const { Intents } = require("discord.js");
const colors = require ("colors")

const config = require("./configuration.json")

class GME {
    constructor(token) {

        this.token = token;
        const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

        // Definiions
        
            const prefix = config.global_prefix;

        // Events

        client.on("debug",message =>{if(message.toLowerCase().includes("heartbeat"))return;console.debug(`${colors.gray(`${new Date()}`)} ${message}`);});
        client.on("ready",()=>{console.log(colors.bold(`Client fully ready.`))
        const embdd = new Discord.MessageEmbed()
        client.channels.cache.get("826917321205088337").send("8")
    })

        client.on("message", message => {
            if (message.author.id == client.user.id) return;
            console.log(message.author + ": " + message.content);

            
        });

        client.login(this.token).then(() => {
        load();
        });
        function load() {
            client.user.setActivity(config.status, {type:"COMPETING"})
        }
}
} module.exports = {GME};

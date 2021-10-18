// Discord™ Required Imports
const Discord = require("discord.js");
const { Intents } = require("discord.js");

// Node Module Imports
const fs = require("fs");
const colors = require ("colors");

//Internal Imports
const config = require("./configuration.json");
const guildData = require("./data/guild.json");
const userData = require("./data/user.json");
const clientData = require("./data/clientInfo.json");


// Welcome to class.
module.exports = class GME {

    constructor(token) {

        this.token = token;
        const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

        client.commands = new Collection(); //Classic mapping system by discordjs.guide
        const validCommandFiles = fs.readdirSync("./commands").filter(f=>f.endsWith(".js"));

        // Validate and Cache commands ahead of time
        for (const f of validCommandFiles) {
            const cmd = require(`./commands/${f}`);
            client.commands.set(cmd.data.name,cmd);
        }

        // Definiions
        
            const prefix = config.global_prefix;

        // Events

        client.on("debug",message =>{if(message.toLowerCase().includes("heartbeat"))return;console.debug(`${colors.gray(`${new Date()}`)} ${message}`);});
        
        client.on("ready",()=>{console.log(colors.bold(`Client fully ready.`))
        const embdd = new Discord.MessageEmbed()
        client.channels.cache.get("676234116211015680")
    })

    /**
     * This is where the fun begins.
     * 
     */

        client.on("message", message => {

            if (message.author.id == client.user.id) return;


        });
    /**
     *  This is where the fun ends.
     */

    // Preload

        client.login(this.token).then(() => {
            load();
        });

    // Postload

        function load() {
            client.user.setPresence({activities:[{name:config.status,type:"COMPETING"}],status:"dnd"});
        }

    }

}

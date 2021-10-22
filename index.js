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

        client.commands = new Discord.Collection(); //Classic mapping system by discordjs.guide
        const validCommandFiles = fs.readdirSync("./commands").filter(f=>f.endsWith(".js"));

        // Validate and Cache commands ahead of time
        for (const f of validCommandFiles) {
            const cmd = require(`./commands/${f}`);
            client.commands.set(cmd.modulename,cmd);
        }

        // Definiions
        
            const prefix = config.global_prefix;

        // Events

        client.on("debug",message =>{if(message.toLowerCase().includes("heartbeat"))return;console.debug(`${colors.gray(`${new Date()}`)} ${message}`);});

        client.on("ready",()=>{console.log(colors.bold(`Client fully ready.`))
    })

    /**
     * This is where the fun begins.
     * 
     */

        client.on("messageCreate", message => {

            if ((message.author.id==client.user.id)||(message.author.bot==true)||(message.channel.type=="DM")) return;

            var prefix = config.global_prefix;
            try {
                if (guildData[message.member.guild.id].customPrefix) var prefix = guildData[message.member.guild.id].customPrefix;
                if (userData[message.author.id].customPrefix) var prefix = userData[message.author.id].customPrefix;
            } catch {};

            if (!message.content.startsWith(prefix)) return;
            message.channel.sendTyping();

            const args = message.content.slice(prefix.length).trim().split(/ +/);
	        const command = args.shift().toLowerCase();

            try {
                client.commands.get(command).execute(message, args);
                console.log(client.guilds.cache.get(message.guild.id).members.cache.get(client.user.id).roles.cache);
            } catch (error) {
                //if (error.message=="Cannot read property 'execute' of undefined") return;
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }

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

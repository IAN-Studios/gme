const gme = require("./index")
try {
const token = process.env.BOT_TOKEN
} catch {
console.error("No Enviroment Variables Found. Please put in a BOT_TOKEN parameter. Thank you.")
process.exit(0)
}
new gme(process.env_BOT_TOKEN);

const gme = require("./index")
console.warn(`Console Initialized for Github, job id ${process.env.GITHUB_JOB}`);
new gme(process.env.BOT_TOKEN);

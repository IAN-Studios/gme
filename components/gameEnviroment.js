const Discord = require("discord.js")

module.exports = class gameEnviroment {
constructor(hostID,participants,gameID,debugMode) {
  this.hostID = hostID;
  this.participants = participants;
  this.gameID = gameID;
  this.debugMode = debugMode;
  
  if ((debugMode != false)||(debugMode)) console.debug(`DEBUG\ GME GameEnviroment Server started in Debug Mode, running with Parameters HOST={${this.hostID}}, PARTICIPANTS={${this.participants}}, GAMEID={${this.gameID}}`);
  this.serverStart();
}
  serverStart() {
  }
}

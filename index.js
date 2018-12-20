const Discord = require('discord.js');
const bot = new Discord.Client();
const RIR = require('./RIRcommands');
const Shintaro = require('./ShintaroCommands');



bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  
});

bot.on('message', msg => {
	let comando = msg.content.split(" ");
	if(comando[0] == 'uwu'){
		if(!Shintaro.getCommand(comando.slice(1),msg,bot) && !RIR.getCommand(comando.slice(1),msg,bot)){
			msg.channel.send(`Este comando no existe Baka ${msg.author}!!`);
			msg.channel.send({files:[{attachment: "./archivos/img/error.png"}]});
		}

	}
	
});

bot.login('NTIwMTMyMTc5NTYxNDE0NjY4.Duutuw.PdanxRoZm-pqxnr_m2oJXmdoxnI');


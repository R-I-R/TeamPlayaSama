const Discord = require('discord.js');
const bot = new Discord.Client();
const RIR = require('./RIRcommands');
const Shintaro = require('./ShintaroCommands');





bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	
	const [prefijo, comando,subcomando] = msg.content.split(" ");
	console.log(prefijo,comando,subcomando);
	if(prefijo == 'uwu'){
		Shintaro.getCommand(comando,subcomando,msg,bot);
		RIR.getCommand(comando,subcomando,msg,bot);
			
	}
});

bot.login('NTIwMTMyMTc5NTYxNDE0NjY4.Duutuw.PdanxRoZm-pqxnr_m2oJXmdoxnI');


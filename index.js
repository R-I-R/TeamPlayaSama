const Discord = require('discord.js');
const bot = new Discord.Client();
const RIR = require('./RIRcommands');
const Shintaro = require('./ShintaroCommands');
const rep = require('./reproductor');

var conexiones = {};

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
		//msg.member.voiceChannel.join().then(c => c.on('disconnect',(error) => ));
	}
	
});

bot.login('NTIwMTMyMTc5NTYxNDE0NjY4.Duutuw.PdanxRoZm-pqxnr_m2oJXmdoxnI');

function voiceChannelConnect(msg){
	let ID = msg.member.voiceChannelID, voiceChannel = msg.member.voiceChannel;
	return new Promise((res) => {
		if(conexiones[ID]){
			console.log("si existe");
			res(conexiones[ID]);
		}else{
			voiceChannel.join().then(c => {
				conexiones[ID] = c;
				conexiones[ID].on('disconnect', error => {
					console.log("sali del canal: ",conexiones[ID].channel.name);
					if(error) console.error;
					else delete(conexiones[ID]);
				});
				conexiones[ID].reproductor = new rep(ID);
				conexiones[ID].textChannel = msg.channel;
				res(conexiones[ID]);
			}).catch(console.error);
			
		}
	})
    
}

module.exports.conexiones = conexiones;
module.exports.voiceChannelConnect = voiceChannelConnect;
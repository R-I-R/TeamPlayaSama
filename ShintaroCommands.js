const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:1};
const fs = require('fs');
const { Client, RichEmbed } = require('discord.js');

palanum = {
	'si':'01',
	'no':'02',
	'damealimento':'03',
	'damemadera':'04',
	'dameoro':'05',
	'damepiedra':'06',
	'ahh':'07',
	'todossaluden':'08',
	'oooh':'09',
	'devuelta':'10',
	'hahaha':'11',
	'soyasaltado':'12',
	'laculpa':'13',
	'comienzajugar':'14',
	'nomeapuntes':'15',
	'enemigovista':'16',
	'estupendorey':'17',
	'unmonje':'18',
	'llevamosmuchotiempo':'19',
	'miabuelita':'20',
	'bonitaciudad':'21',
	'nometoques':'22',
	'grupodecaza':'23',
	'malditasea':'24',
	'hieremesipuedes':'25',
	'nolamaravilla':'26',
	'hasjugado2horas':'27',
	'deberiasvercomoquedo':'28',
	'roggan':'29',
	'wololo':'30',
	'atacaalenemigo':'31',
	'dejadecrearaldeanos':'32',
	'creamasaldeanos':'33',
	'construyeunaarmada':'34',
	'dejadecontruirarmada':'35',
	'esperamiseñal':'36',
	'contruyeunamaravilla':'37',
	'dameloquetesobre':'38',
	'ally':'39',
	'enemy':'40',
	'neutral':'41',
	'enqueedad':'42'
}


//funcion que recibe los comandos 
function getCommand(comando,subcomando,msg,bot){
    switch(comando){ //la pos 0 es la palabra despues del uwu
		case "loli":
			msg.reply("Yoshi yoshi onichan")
			.then(message => console.log(`Sent message: ${message.content}`))
			.catch(console.error);
			break;
		case "picture":
			msg.reply("fillsquare.png")
			.then(message => console.log(`Sent message: ${message.content}`))
			.catch(console.error);
			break;
		case "botqlo":
			msg.reply('K wea otaku qlo bastardo ijo la comemoco')
			.then(message => console.log(`Sent message: ${message.content}`))
			.catch(console.error);
			break;
		case "olo":
			const canal = msg.channel
			canal.send('hello!')
			.then(message => console.log(`Sent message: ${message.content}`))
			.catch(console.error);
			break;
		case "yutu":
			if(msg.member.voiceChannel){
			const conexion = msg.member.voiceChannel.join()
			.then(connection => {
				const youtube = ytdl(
					'https://www.youtube.com/watch?v=-vH2eZAM30s',
					{filter:'audioonly'});
				const dispatcher1 = connection.playStream(youtube, streamOptions);
			})
			.catch(console.error);
			
		}
		else{
			msg.reply("necesitas entrar a un canal de voz");
		}
			break;	
		
		case "embed":
			const embed = new RichEmbed()
			// Set the title of the field
			.setTitle('A slick little embed')
			// Set the color of the embed
			.setColor(0xFF0000)
			// Set the main content of the embed
			.setDescription('Hello, this is a slick embed!');
			// Send the embed to the same channel as the message
			msg.channel.send(embed);
			break;
		
		case "age":
			if(msg.member.voiceChannel){
				const conexion = msg.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile(`age2sonidos/${palanum[subcomando]}.mp3`);
					
				})
				.catch(console.error);

				
			}
			else{
				msg.reply("necesitas entrar a un canal de voz");
			}
			break;
		
	}
}

//exporto los comandos que se usaran
module.exports = {
    getCommand,
}
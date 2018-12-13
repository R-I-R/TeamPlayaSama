
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:1};
const fs = require('fs');
const { Client, RichEmbed } = require('discord.js');

const request = require('request');

let cheerio = require('cheerio')




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
			.then(message => console.log(`Sent message: ${msg.content}`))
			.catch(console.error);
			break;
		case "picture":
			msg.reply("fillsquare.png")
			.then(message => console.log(`Sent message: ${msg.content}`))
			.catch(console.error);
			break;
		case "botqlo":
			msg.reply('K wea otaku qlo bastardo ijo la comemoco')
			.then(message => console.log(`Sent message: ${msg.content}`))
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
		
		case "moneda":
			if(Math.random() <.5 ){
				msg.channel.send("Salio cara")
				.then(message => console.log(`Sent message: ${msg.content}`))
				.catch(console.error);
			}
			else{
				msg.channel.send("Salio sello")
				.then(message => console.log(`Sent message: ${msg.content}`))
				.catch(console.error);
			}
			break;
			
		case "dado":
			msg.channel.send(`Salio ${Math.floor(Math.random() * 6) + 1 }`)
			.then(message => console.log(`Sent message: ${msg.content}`))
			.catch(console.error);
			break;
		
		case "age":
			if(msg.member.voiceChannel){
				const conexion = msg.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile(`./age2sonidos/${palanum[subcomando]}.mp3`);
					
				})
				.catch(console.error);

				
			}
			else{
				msg.reply("necesitas entrar a un canal de voz");
			}

			break;
		case "agememe":
			request('https://www.facebook.com/pg/Memes-hechos-con-Age-Of-Empires-2-Shitposting-226717164579337/', function (error, response, body) {
			var $ = cheerio.load(body);
				$('div._427x').each(function(i, element){
					var b = $(this);  //no luck
					var image = a.find('div._5cq3._1ktf').first('a._4-eo._2t9n').attr('href');
					var image = b.find('a._4-eo._2t9n').attr('href'); 
					console.log(image);
						
					msg.channel.send(`https://www.facebook.com${image}`)
					.then(message => console.log(`Sent message: ${msg.content}`))
					.catch(console.error);
						
						});

					});
					break;	
		case "tiempo":
			let apiKey = '2f1e8bb2fbf1116d0a9ceebfbb022766';
			let city = `${subcomando}`;
			let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

			request(url, function (err, response, body) {
			  if(err){
				console.log('error:', error);
			  } else {
				let weather = JSON.parse(body)
				let message = `Hay ${weather.main.temp}°C en ${weather.name}!
							  La velocidad del viento es de ${weather.wind.speed} kilometros por hora y la humedad es de ${weather.main.humidity}%`;
				console.log(message);
				msg.reply(message);
			  }
			});
			break;
			
		case "meme":
			request('https://jaidefinichon.com/', function (error, response, body) {
			var $ = cheerio.load(body);

			$('div.image_post').each(function(i, element){
				var a = $(this);
				var image = a.find('figure').first('img').attr('src');  //no luck
				var image = a.find('figure > img').attr('src'); 
				console.log(image);
				if(i > 1){
					msg.channel.send(`${image}`)
					.then(message => console.log(`Sent message: ${msg.content}`))
					.catch(console.error);
				}
				});

			});
			break;
			
			
		
		
		
	}
}

//exporto los comandos que se usaran
module.exports = {
    getCommand,
    
}
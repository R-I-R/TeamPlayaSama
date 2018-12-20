
const ytdl = require('ytdl-core');
const streamOptions = {seek: 0, volume:1};
const fs = require('fs');
const { Client, RichEmbed } = require('discord.js');

const request = require('request');
let cheerio = require('cheerio')

const Jimp = require('jimp');
/*const curl = require("curl");
const jsdom = require("jsdom");

const url = "https://www.reddit.com/r/dankmemes/";

curl.get(url, null, (err,resp,body)=>{
  if(resp.statusCode == 200){
     parseData(body);
  }
  else{
     //some error handling
     console.log("error while fetching url");
  }
});

function parseData(html){
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);

	//let's start extracting the data
	//let's start extracting the data
    var items = $(".list_item");
    for(var i = 0; i < items.length; i++){
      var innerInfo = $(items[i]).children('.info');
      var movieName = $($(innerInfo).find('a')[0]).html();
      var movieYear = $($(innerInfo).find('.year_type')[0]).html();
      console.log(i + " -> " + movieYear + ":" + movieName);
    }
}
*/




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
//var contenido = fs.readFileSync("listacomandos.txt","utf-8");

//funcion que recibe los comandos 
function getCommand(mensaje,msg,bot){
	let existe = true;
	let subcomando = mensaje[1];
	let comando = mensaje[0];

	switch(comando){ //la pos 0 es la palabra despues del uwu
		case "changemymind":
			Jimp.read('https://i.kym-cdn.com/photos/images/original/001/346/065/d4d.png')
			.then(image =>{
				Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
					image.print(font,
						10,
						10,
						'Hello world that wraps!',
						50,
						(err, image, { x, y }) => {
						  image.print(font, x, y + 20, 'More text on another line', 50);
						}
					  );
					image.writeAsync("./archivos/img/changemymind.png"); 
					msg.channel.send({files:[{attachment: "./archivos/img/changemymind.png"}]})
					.then(message => console.log(`Sent message: ${msg.content}`))
					.catch(console.error);
				  });
			})
			.catch(err =>{
				console.error
			})
			
			break;

		case "help":

			msg.channel.send("",{embed:{
				title:"Lista de Comandos",
				color:500,
				description: fs.readFileSync("listacomandos.txt","utf-8"),
			}})
			.then(message => console.log(`Sent message: ${msg.content}`))
			.catch(console.error);
			break;
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
					if(parseInt(subcomando.slice(0,2))) connection.playFile(`./archivos/age2sonidos/${subcomando.slice(0,2)}.mp3`,{passes:3});
					else connection.playFile(`./archivos/age2sonidos/${palanum[subcomando]}.mp3`,{passes:3});
					
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
		case "sale":
			if(msg.member.voiceChannel){
				const conexion = msg.member.voiceChannel.join()
				.then(connection => {
					msg.member.voiceChannel.leave();
					
				})
				.catch(console.error);
			}
			break;

		case "tiempo":
			let apiKey = '2f1e8bb2fbf1116d0a9ceebfbb022766';
			let city = `${mensaje.slice(1).join(" ")}`;
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
			
				switch(subcomando){
					case "jaidefinichon":
						request('https://jaidefinichon.com/', function (error, response, body) {
						var $ = cheerio.load(body);

						$('div.image_post').each(function(i, element){
							var a = $(this);
							var image = a.find('figure').first('img').attr('src');  //no luck
							var image = a.find('figure > img').attr('src'); 
							console.log(image);
							if(i > 1 && i < 5){
								msg.channel.send(`${image}`)
								.then(message => console.log(`Sent message: ${msg.content}`))
								.catch(console.error);
							}
							});

						});
					break;
				
				

				
				case "dankmemesreddit":
					request('https://www.reddit.com/r/dankmemes/', function (error, response, body) {
					var $ = cheerio.load(body);

					$('div._30a0THmZ3f5iZXAQ0hBJ0k').each(function(i, element){
						var a = $(this);
						var image = a.find('div').first('img._2_tDEnGMLxpM6uOa2kaDB3.media-element').attr('src');  //no luck
						var image = a.find('div > img._2_tDEnGMLxpM6uOa2kaDB3.media-element').attr('src'); 
						console.log(image);
						
							msg.channel.send(`${image}`)
							.then(message => console.log(`Sent message: ${msg.content}`))
							.catch(console.error);
						
						});

					});
					break;
				}
			
			break;
		default:
			existe = false;
	}
	return existe;
}

//exporto los comandos que se usaran
module.exports = {
    getCommand,
    
}	
const ytdl = require("ytdl-core");
const youtube = require("./youtube");
const index = require('./index');
var canal;

//funcion que recibe los comandos
function getCommand(comando,msg,bot){
    let existe = true;
    switch(comando[0]){ //la pos 1 es la palabra despues del uwu
        
        case 'hola':
            msg.channel.send(`okaeri ${msg.author} onii-chan`);
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/okaeri onii-chan.mp3");
            });
            break;
        case 'wena':
            msg.channel.send(`Chupala ${msg.author} onii-chan`);
            break;
        case 'nice':
            msg.channel.send({files:[{attachment: "./archivos/img/nice.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/Nice.mp3");
            });
            break;
        case 'ara':
            msg.channel.send({files:[{attachment: "./archivos/img/araara.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/araara.mp3");
            });
            break;
        case 'yamero':
            msg.channel.send(`Yameroo!! ${msg.author} onii-chan`);
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/yamero.mp3");
            });
            break;
        case 'pilarmen':
            msg.channel.send({files:[{attachment: "./archivos/img/pilarmen.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                    conexion.reproductor.playApart("archivos/sonidos/Pillar MenS.mp3");
            });
            
            break;
        case 'pilarmenfull':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/Pillar Men.mp3");
            });
            break;
        case 'callate':
            msg.channel.send({files:[{attachment: "./archivos/img/callate.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/silencio.mp3");
            });
            
            break;
        case 'avengers':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.playApart(null,ytdl("https://www.youtube.com/watch?v=1jbZjcgvzz8",{filter:"audioonly"}));
            });
            break;
        case 'nya':
            msg.channel.send({files:[{attachment: "./archivos/img/nyan.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/nya.mp3");
            });
            break;
        case 'tuturu':
            msg.channel.send({files:[{attachment: "./archivos/img/tuturu.png"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/Tuturu.mp3");
            });
            break;
        case 'baka':
            msg.channel.send({files:[{attachment: "./archivos/img/baka.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/Baka.mp3");
            });
            break;
        case 'ohoho':
            msg.channel.send({files:[{attachment: "./archivos/img/ohoho.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/ohoho.mp3");
            });
            break;
        case 'risamalvada':
            msg.channel.send({files:[{attachment: "./archivos/img/risamalvada.gif"}]});
            ifMemberVoiceChannel(msg, false, conexion => {
                conexion.reproductor.playApart("archivos/sonidos/risamalvada.mp3");
            });
            break;

        case 'play':
            ifMemberVoiceChannel(msg, true, conexion => {
                youtube.buscarVideo(comando.slice(1).join(" ")).then(video => {
                    conexion.reproductor.play(ytdl("https://www.youtube.com/watch?v="+video.id.videoId,{filter:"audioonly"}),video.snippet.title);
                });
            });

            break;
        case 'skip':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.skip();
            });
            break;
        case 'pause':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.pause();
            });
            break;
        case 'resume':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.resume();
            });
            break;
        case 'list':
            ifMemberVoiceChannel(msg, true, conexion => {
                conexion.reproductor.list(5);
            });
            break;
        case 'aa':
            console.log("aa");
            if(msg.member.voiceChannel) index.voiceChannelConnect(msg);
            //console.log(canal);
            
            break;
        case 'yapo':
            console.log("moviendo al canal ",canal);
            msg.member.setVoiceChannel(canal);
            break;
        default:
            existe = false;
    }
    return existe;
}


function ifMemberVoiceChannel(msg,sino,callback){
    if(msg.member.voiceChannel){
        index.voiceChannelConnect(msg).then(conexion => {
            callback(conexion);
        }).catch(console.error);;
    }else{
        if(sino) msg.channel.send("debes estar en un canal de voz");
    }
}


//exporto los comandos que se usaran
module.exports = {
    getCommand,
}
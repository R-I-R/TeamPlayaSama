const ytdl = require("ytdl-core");
const youtube = require("./youtube");
var canal;
//funcion que recibe los comandos
function getCommand(comando,msg,bot){
    let existe = true;
    switch(comando[0]){ //la pos 1 es la palabra despues del uwu
        
        case 'hola':
            msg.channel.send(`okaeri ${msg.author} onii-chan`);
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/okaeri onii-chan.mp3");
                }).catch(console.error);
            }
            break;
        case 'wena':
            msg.channel.send(`Chupala ${msg.author} onii-chan`);
            break;
        case 'nice':
            msg.channel.send({files:[{attachment: "./archivos/img/nice.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(async conexion => {
                    conexion.playFile("archivos/sonidos/Nice.mp3");
                }).catch(console.error);
            }
            break;
        case 'ara':
            msg.channel.send({files:[{attachment: "./archivos/img/araara.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/araara.mp3");
                }).catch(console.error);
            }
            break;
        case 'yamero':
            msg.channel.send(`Yameroo!! ${msg.author} onii-chan`);
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/yamero.mp3");
                }).catch(console.error);
            }
            break;
        case 'pilarmen':
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/Pillar MenS.mp3");
                }).catch(console.error);
            }
            msg.channel.send({files:[{attachment: "./archivos/img/pilarmen.gif"}]});
            break;
        case 'pilarmenfull':
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/Pillar Men.mp3");
                }).catch(console.error);
            }else{
                msg.channel.send("debes estar en un canal de voz");
            }
            break;
        case 'callate':
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/silencio.mp3");
                }).catch(console.error);
            }
            msg.channel.send({files:[{attachment: "./archivos/img/callate.gif"}]});
            break;
        case 'avengers':
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playStream(ytdl("https://www.youtube.com/watch?v=1jbZjcgvzz8",{filter:"audioonly"}));
                }).catch(console.error);
            }else{
                msg.channel.send("debes estar en un canal de voz");
            }
            break;
        case 'nya':
            msg.channel.send({files:[{attachment: "./archivos/img/nyan.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/nya.mp3");
                }).catch(console.error);
            }
            break;
        case 'tuturu':
            //msg.channel.send({files:[{attachment: "./archivos/img/nyan.gif"}]});
            if(msg.member.voiceChannel){
                msg.channel.send({files:[{attachment: "./archivos/img/tuturu.png"}]});
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/Tuturu.mp3");
                }).catch(console.error);
            }
            break;
        case 'baka':
            msg.channel.send({files:[{attachment: "./archivos/img/baka.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/Baka.mp3");
                }).catch(console.error);
            }
            break;
        case 'ohoho':
            msg.channel.send({files:[{attachment: "./archivos/img/ohoho.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/ohoho.mp3");
                }).catch(console.error);
            }
            break;
        case 'risamalvada':
            msg.channel.send({files:[{attachment: "./archivos/img/risamalvada.gif"}]});
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/risamalvada.mp3");
                }).catch(console.error);
            }
            break;
        case 'play':
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    youtube.buscarVideo(comando.slice(1).join(" ")).then(video => {
                        msg.channel.send("Reproduciendo: "+video.snippet.title);
                        conexion.playStream(ytdl("https://www.youtube.com/watch?v="+video.id.videoId,{filter:"audioonly"}));
                    });
                }).catch(console.error);
            }else{
                msg.channel.send("debes estar en un canal de voz");
            }
            break;
        case 'oye':
            if(msg.member.voiceChannel) canal = msg.member.voiceChannelID;
            console.log(canal);
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


//exporto los comandos que se usaran
module.exports = {
    getCommand,
}
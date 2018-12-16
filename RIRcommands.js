//funcion que recibe los comandos
function getCommand(comando,msg,bot){
    let existe = true;
    switch(comando[0]){ //la pos 1 es la palabra despues del uwu
        
        case 'hola':
            msg.channel.send(`okaeri nasai ${msg.author} oni-chan`);
            if(msg.member.voiceChannel){
                msg.member.voiceChannel.join().then(conexion => {
                    conexion.playFile("archivos/sonidos/okaeri onii-chan.mp3");
                }).catch(console.error);
            }
            break;
        case 'wena':
            msg.channel.send(`Chupala ${msg.author} oni-chan`);
            break;
        case 'nice':
            msg.channel.send({files:[{attachment: "./archivos/img/nice.gif"}]});
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
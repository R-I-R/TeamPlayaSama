//funcion que recibe los comandos
function getCommand(comando,subcomando,msg,bot){
    
    switch(comando){ //la pos 0 es la palabra despues del uwu
        
        case 'hola':
            msg.reply(`okaeri nasai ${msg.author} oni-chan`);
            break;
        case 'wena':
            msg.reply(`Chupala ${msg.author} oni-chan`);
            break;
    }
}

//exporto los comandos que se usaran
module.exports = {
    getCommand,
}
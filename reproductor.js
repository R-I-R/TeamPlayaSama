const index = require('./index');
const cola = require('./colasypilas').Queue;

class reproductor{

    constructor(ID){
        this.conexion = index.conexiones[ID];
        this.cola = new cola();
        this.sonando = null;
    }

    play(stream,titulo){
        if(this.conexion.dispatcher){
            console.log("ya esta escuchando");
            this.cola.enqueue({'stream':stream,'titulo':titulo});
            this.conexion.textChannel.send("Añadido a la cola: `"+titulo+'`');
        }else{
            console.log("inciando ",titulo);
            this.sonando = {'stream':stream,'titulo':titulo}
            this.conexion.playStream(stream).on('end', error => {
                if(error) console.log(error);
                
                if(!this.cola.isEmpty()){
                    setTimeout(()=>{
                        this.play(this.cola.peek()['stream'],this.cola.peek()['titulo']);
                        this.cola.dequeue();
                    },1000);
                }else this.sonando = null;
            });
            this.conexion.textChannel.send("Reproduciendo: `"+titulo+'`');
        }
    }

    skip(){
        if(this.conexion.dispatcher){
            this.conexion.dispatcher.end('skip');
        }
    }

    pause(){
        if(this.conexion.dispatcher){
            if(this.conexion.dispatcher.paused) this.conexion.textChannel.send("Ya esta Pausado");
            else{
                this.conexion.dispatcher.pause();
                this.conexion.textChannel.send("Pausado");
            }
        }else this.conexion.textChannel.send("No hay nada reproduciendose");
    }

    resume(){
        if(this.conexion.dispatcher){
            if(this.conexion.dispatcher.paused){
                this.conexion.dispatcher.resume();
                this.conexion.textChannel.send("Sonando");
            }else this.conexion.textChannel.send("No hay nada Pausado");
            
        }else this.conexion.textChannel.send("No hay nada reproduciendose")
    }

    list(n=this.cola.size()){
        if(this.cola.size() > 0){
            this.conexion.textChannel.send("Estas escuchando: `"+this.sonando['titulo']+'`');
            this.conexion.textChannel.send("las siguientes 5:");
            this.cola.queue.slice(0,n).forEach(a => {
                this.conexion.textChannel.send('`'+a['titulo']+'`');
            });
        }else if(this.sonando) this.conexion.textChannel.send("Estas escuchando: `"+this.sonando['titulo']+'`');
        else this.conexion.textChannel.send("No estas escuchando nada");
    }



}



module.exports = reproductor;
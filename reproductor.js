const index = require('./index');
const cola = require('./colasypilas').Queue;
const ytdl = require("ytdl-core");

class reproductor{

    constructor(ID){
        this.conexion = index.conexiones[ID];
        this.cola = new cola();
        this.sonando = null;
    }

    play(link,titulo,ini=15000,fin=0){
        console.log("temporizador cancelado play");
        clearTimeout(this.conexion.timer);

        

        if(this.sonando && this.sonando.reproduciendo){
            console.log("ya esta escuchando");
            this.cola.enqueue({'link':link,'titulo':titulo});
            this.conexion.textChannel.send("Añadido a la cola: `"+titulo+'`');
        }else{
            console.log("inciando ",titulo);
            this.sonando = {'link':link,'titulo':titulo,'reproduciendo':true};
            let stream = ytdl(link,{filter:"audioonly", range:{start:tiempo, end:}});
            //console.log(stream);
            this.conexion.playStream(stream).on('end', error => {
                if(error) console.log(error);
                //if(this.sonando['tiempo']) return;
                if(this.conexion.dispatcher) return;

                console.log('temporizador restablecido play');
			    this.conexion.timer = setTimeout(() => {this.conexion.disconnect();console.log('no me pescaste, chao');},10000);//300000ms -> 5'
                
                if(!this.cola.isEmpty()){
                    setTimeout(()=>{
                        this.play(this.cola.peek()['link'],this.cola.peek()['titulo']);
                        this.cola.dequeue();
                    },1000);
                }else this.sonando = null;
            });
            this.conexion.textChannel.send("Reproduciendo: `"+titulo+'`');
        }
    }

    playApart(ruta=null, stream=null){

        console.log("temporizador cancelado playA");
        clearTimeout(this.conexion.timer);

        /*if(this.sonando) if(this.sonando['tiempo'] == null){
            this.sonando['tiempo'] = parseInt(this.conexion.dispatcher.time/1000);
            console.log('tiempo en sonando');
        } */
        this.sonando.reproduciendo = false;

        let tiempostream;
        if(this.sonando) tiempostream = this.conexion.dispatcher.time;
        //if(this.sonando && this.sonando['tiempo']) console.log("tiempo sonando -",(this.sonando['tiempo']));

        if(this.sonando) console.log('tiempo sonando: '+this.conexion.dispatcher.time);

        let dispacher;

        if(ruta) dispacher = this.conexion.playFile(ruta);
        else dispacher = this.conexion.playStream(stream);

        dispacher.on('end', error => {
            if(error) console.log(error);

            if(this.sonando){
                console.log(tiempostream);
                this.play(this.sonando.link, this.sonando.titulo, tiempostream);
            }else{
                console.log('temporizador restablecido playA');
		        this.conexion.timer = setTimeout(() => {this.conexion.disconnect();console.log('no me pescaste, chao');},10000);//300000ms -> 5'
            }
            
            //console.log('tiempo q sonaba',this.sonando['tiempo']);
            //if(this.sonando && this.sonando['tiempo']) setTimeout(()=>this.play(this.sonando['stream'],this.sonando['titulo']),500);
        });
            
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
            this.conexion.textChannel.send("las siguientes ",n,":");
            this.cola.queue.slice(0,n).forEach(a => {
                this.conexion.textChannel.send('`'+a['titulo']+'`');
            });
        }else if(this.sonando) this.conexion.textChannel.send("Estas escuchando: `"+this.sonando['titulo']+'`');
        else this.conexion.textChannel.send("No estas escuchando nada");
    }


}


module.exports = reproductor;
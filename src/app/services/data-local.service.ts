import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculasLocalData:PeliculaDetalle[]=[];
  constructor(private _storage:Storage,
    private toastcrtl:ToastController
    ) { 
    this.init();
    this.cargarFavoritos();
  }


  //lo iniciamos
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this._storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:


  //Insertamos los datos y comprobamos si ya existen
  public set(pelicula:PeliculaDetalle ) {
    let existe=false;
    let mensaje:string;
    
    //buscamos si esta el id de la peli seleccionada
    for (let peli of this.peliculasLocalData){
      if(peli.id===pelicula.id){
        existe=true;
        
        break
      }
    }

    //en caso de que este la guardamos si no la quitamos
    if(existe){
      this.peliculasLocalData=this.peliculasLocalData.filter(informacion=> informacion.id!==pelicula.id);
      mensaje='se ha eliminado de favoritos';

    }else{
      this.peliculasLocalData.push(pelicula);
      mensaje='se ha añadido a favoritos';
    }

    this._storage?.set('peliculas', this.peliculasLocalData);
    this.presentToast(mensaje);
    console.log(this.peliculasLocalData);
    return !existe;
  }

  //enviamos el mensaje para avisar que se ha añadido o quitado


  async presentToast(message:string) {
    const toast = await this.toastcrtl.create({
      message,
      duration: 1000
    });
    toast.present();
  }


  //cuando se inicia en el constructor lo llamamos
  //psamos una promesa
  async cargarFavoritos(){
    const peliculas= await this._storage.get('peliculas');
    this.peliculasLocalData=peliculas || [];
    return this.peliculasLocalData;

  }


  async existePelicula(id){
  
    await this.cargarFavoritos();
    const existe =this.peliculasLocalData.find( peli => peli.id===id);
    return !!existe

  }


  
  
}

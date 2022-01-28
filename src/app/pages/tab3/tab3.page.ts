import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeliculaDetalle, Result } from '../../interfaces/index';

import { DataLocalService } from '../../services/data-local.service';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page   {
 
  
  
  peliculas:any[]=[];
  generos:any[]=[];
  mezcla:any[]=[];
  @Input() load:boolean;

  constructor(private dataLocal:DataLocalService,
    private peliculasService:PeliculasService
    ) {
    this.llamar();
    this.cargarDatos( '');
   
  }
  
  async llamar(){
  
    await this.dataLocal.cargarFavoritos().then(
      pelis=>this.peliculas=pelis
    );
    
    this.generos= await this.peliculasService.getBusquedaPorGenero();
    console.log(this.peliculas);

    this.peliculasPorGenero(this.peliculas,this.generos);


  }

  
   cargarDatos(event){
     console.log('cargarDatos',event);
      this.dataLocal.cargarFavoritos().then(
      pelis=>this.peliculas=pelis
    );
    

  }
  onClick(){
 this.llamar();
  }



  peliculasPorGenero(peliculas:Result[],generos:any[]){
    this.mezcla=[];
    
    generos.forEach(gen=>{

      this.mezcla.push({
        genero:gen.name,
        pelis:peliculas.filter(peli=>{

          return peli.genre_ids.find(genre => genre===gen.id);
        })
      });


    
    });
   
      
        console.log(this.mezcla);
        
        
  }
  

  ionViewWillEnter() {
    this.llamar();

  }
  

}

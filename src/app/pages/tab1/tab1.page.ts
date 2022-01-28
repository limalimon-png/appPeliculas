import { Component, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/interfaces';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  logoPath:string='https://image.tmdb.org/t/p/w500/';
  @Output() enviar;
  peliculasRecientes:Result[]=[];
  peliculasPopulares:Result[]=[];
  
  constructor(private peliculas:PeliculasService,) {}
  ngOnInit(){
   this.peliculas.getcartelera().subscribe(
     resp=>{
       this.peliculasRecientes=resp.results;
     }
    
   );
   this.getPopulares();

   
  }
  
  cargarMas(){
    this.peliculas.setPagina(1);
    this.getPopulares();
    

  }
  getPopulares(){
    this.peliculas.getPopulares().subscribe(
      resp=>{
        
        if(this.peliculasPopulares.length===0){
          this.peliculasPopulares=resp.results;
          console.log("no hay");
        }else{
          this.peliculasPopulares=[ ...this.peliculasPopulares, ...resp.results];
          console.log("si hay");}
          
      }
     
    );

  }

  cargarDatos(event){
    console.log('tab1Enviar',event);
   
     }


}

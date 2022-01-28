import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Result } from '../../interfaces/index';
import { ModalController } from '@ionic/angular';
import { DetallePeliComponent } from 'src/app/components/detalle-peli/detalle-peli.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  peliculasPopulares:Result[]=[];
  textoBuscar:string;
  peliculasEncontradas:Result[]=[];

  constructor(private peliculasService:PeliculasService,
    private modalController:ModalController
    ) {}
  ngOnInit() {
   this.peliculasService.getPopulares().subscribe(
     rest=>{
       this.peliculasPopulares=rest.results;
       this.peliculasPopulares=this.peliculasPopulares.slice(0,11);
     }
   );
  }


  buscar( evento){
    const titulo=evento.detail.value;
    this.textoBuscar=titulo;
    if(this.textoBuscar===''){
      this.peliculasEncontradas=[];
      return;
    }
    this.peliculasService.getBusqueda(this.textoBuscar).subscribe(
      rest=>{
        this.peliculasEncontradas=rest.results;
      }
    );
    

  }

  escribirEnElBuscador(titulo:string){
this.textoBuscar=titulo;
  }


  async modalDetalle(peli) {
    const modal = await this.modalController.create({
      component: DetallePeliComponent,
      componentProps:{
        peli
      }
  
    });
    
    return await modal.present();
  }

  cargarDatos(event){
    console.log('cargarDatos',event);
     
  
     }

}

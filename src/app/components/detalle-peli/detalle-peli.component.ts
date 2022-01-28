import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Result, PeliculaDetalle, CreditosDetalle, Cast } from '../../interfaces/index';
import { PeliculasService } from '../../services/peliculas.service';
import { ModalController, ToastController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';
import { Tab3Page } from '../../pages/tab3/tab3.page';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.scss'],
})

 
export class DetallePeliComponent implements OnInit {
  iconoFavoritos:string;

  //variables
  detalles:PeliculaDetalle={};
  creditosDetalle:Cast[];
  @Input() peli:Result;
  @Output() cambiosModal=false;
  
  textoOculto=150;
  toggleLeer='Leer más';

  slidesOptions = {
  
    
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
    
  
  };
  

  constructor(private peliculasServicio:PeliculasService,
    private modalController:ModalController,
    private datalocal:DataLocalService,
    // private pagFavoritos:Tab3Page
    
    ) { }

   ngOnInit() {

    //comprobamos si existe la pelicula
      this.datalocal.existePelicula(this.peli.id).then(existe => this.iconoFavoritos =(existe)?'heart':'heart-outline');
     
    
    
    this.peliculasServicio.getPeliculaDetalle(this.peli.id).subscribe(
      resp=>{
        this.detalles=resp;
      }
    );

    this.peliculasServicio.getCreditosDetalle(this.peli.id).subscribe(
      resp=>{
        this.creditosDetalle= resp.cast;
      }
    );
    
  }


  onClick(){
    if(this.textoOculto===150){
      this.textoOculto=5000;
      this.toggleLeer='Ocultar';
    }else{
      this.textoOculto=150;
      this.toggleLeer='Leer más';
    }
    
    

  }



  regresar(){
    this.modalController.dismiss();
  }
  favorito(){
    const existe=this.datalocal.set(this.peli);
    this.iconoFavoritos =(existe)?'heart':'heart-outline';
    // this.pagFavoritos=new Tab3Page(this.datalocal);
    // this.pagFavoritos.probar();
    this.cambiosModal=true;

  

  }


  

}

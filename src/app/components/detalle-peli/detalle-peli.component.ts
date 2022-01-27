import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Result, PeliculaDetalle, CreditosDetalle, Cast } from '../../interfaces/index';
import { PeliculasService } from '../../services/peliculas.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.scss'],
})

 
export class DetallePeliComponent implements OnInit {
  

  //variables
  detalles:PeliculaDetalle={};
  creditosDetalle:Cast[];
  @Input() peli:Result;
  textoOculto=150;
  toggleLeer='Leer más';

  slidesOptions = {
  
    
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
    
  
  };
  

  constructor(private peliculasServicio:PeliculasService,
    private modalController:ModalController) { }

  ngOnInit() {
    console.log(this.peli.id);
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

  }

}

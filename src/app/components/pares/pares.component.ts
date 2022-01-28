import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/interfaces';
import { DetallePeliComponent } from '../detalle-peli/detalle-peli.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pares',
  templateUrl: './pares.component.html',
  styleUrls: ['./pares.component.scss'],
})
export class ParesComponent implements OnInit {
  @Input() peliculas:Result[]=[];
  @Output() masPelis=new EventEmitter();
  //para actualizar los datos cuando cambiamos en el modal, emitimos un evento en el dismiss
@Output() load = new EventEmitter<boolean>();


  slideOpts={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween: -10
    };


  constructor(private modalController:ModalController) { }

  

  ngOnInit() {}



  cargarMas(){
    console.log("cargamas");
    this.masPelis.emit();
  }


  async modalDetalle(peli) {
    const modal = await this.modalController.create({
      component: DetallePeliComponent,
      componentProps:{
        peli
      }
  
    });
    //aqui lo llamamos y lo emitimos
    modal.onDidDismiss().then(data => {
      this.load.emit(true);
    });
    return await modal.present();
  }
}

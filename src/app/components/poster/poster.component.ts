import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../../interfaces/index';
import { DetallePeliComponent } from '../detalle-peli/detalle-peli.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
@Input() peliculas:Result[]=[];

//para actualizar los datos cuando cambiamos en el modal, emitimos un evento en el dismiss
@Output() load = new EventEmitter<boolean>();


slideOpts={
slidesPerView:3.3,
freeMode:true,
spaceBetween: -10
};
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
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

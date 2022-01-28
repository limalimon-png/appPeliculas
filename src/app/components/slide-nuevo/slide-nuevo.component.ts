import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Result } from '../../interfaces/index';
import { DetallePeliComponent } from '../detalle-peli/detalle-peli.component';

@Component({
  selector: 'app-slide-nuevo',
  templateUrl: './slide-nuevo.component.html',
  styleUrls: ['./slide-nuevo.component.scss'],
})
export class SlideNuevoComponent implements OnInit {

  @Input() peliculas:Result[]=[];
  //para actualizar los datos cuando cambiamos en el modal, emitimos un evento en el dismiss
@Output() load = new EventEmitter<boolean>();
  constructor(private modalController: ModalController) { }

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

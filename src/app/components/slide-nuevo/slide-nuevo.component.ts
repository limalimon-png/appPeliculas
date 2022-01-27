import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private modalController: ModalController) { }

  ngOnInit() {}



  async modalDetalle(peli) {
    const modal = await this.modalController.create({
      component: DetallePeliComponent,
      componentProps:{
        peli
      }
  
    });
    return await modal.present();
  }
}

import { Component, Input, OnInit } from '@angular/core';
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
    return await modal.present();
  }

}

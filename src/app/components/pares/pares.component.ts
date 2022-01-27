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
    return await modal.present();
  }
}

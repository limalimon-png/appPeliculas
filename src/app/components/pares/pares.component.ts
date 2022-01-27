import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from 'src/app/interfaces';

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


  constructor() { }

  

  ngOnInit() {}



  cargarMas(){
    console.log("cargamas");
    this.masPelis.emit();
  }

}

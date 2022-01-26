import { Component, Input, OnInit } from '@angular/core';
import { Cartelera } from 'src/app/interfaces';
import { Result } from '../../interfaces/index';

@Component({
  selector: 'app-slide-nuevo',
  templateUrl: './slide-nuevo.component.html',
  styleUrls: ['./slide-nuevo.component.scss'],
})
export class SlideNuevoComponent implements OnInit {

  @Input() peliculas:Result[]=[];
  constructor() { }

  ngOnInit() {}

}

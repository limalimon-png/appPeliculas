import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/index';

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
  constructor() { }

  ngOnInit() {}

}

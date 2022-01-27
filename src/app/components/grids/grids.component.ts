import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss'],
})
export class GridsComponent implements OnInit {
@Input() titulo:string='';
  constructor() { }

  ngOnInit() {}

}

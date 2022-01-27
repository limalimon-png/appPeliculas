import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideNuevoComponent } from './slide-nuevo/slide-nuevo.component';
import { PosterComponent } from './poster/poster.component';
import { ParesComponent } from './pares/pares.component';
import { GridsComponent } from './grids/grids.component';



@NgModule({
  declarations: [SlideNuevoComponent,PosterComponent,ParesComponent,GridsComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  
  ],
  exports:[SlideNuevoComponent,PosterComponent,ParesComponent,GridsComponent]
})
export class ComponentsModule { }

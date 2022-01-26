import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideNuevoComponent } from './slide-nuevo/slide-nuevo.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [SlideNuevoComponent,PosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  
  ],
  exports:[SlideNuevoComponent,PosterComponent]
})
export class ComponentsModule { }

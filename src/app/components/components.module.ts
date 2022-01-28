import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideNuevoComponent } from './slide-nuevo/slide-nuevo.component';
import { PosterComponent } from './poster/poster.component';
import { ParesComponent } from './pares/pares.component';
import { GridsComponent } from './grids/grids.component';
import { DetallePeliComponent } from './detalle-peli/detalle-peli.component';
import { Tab3PageModule } from '../pages/tab3/tab3.module';
import { Tab3Page } from '../pages/tab3/tab3.page';



@NgModule({
  entryComponents:[DetallePeliComponent],
  declarations: [SlideNuevoComponent,PosterComponent,ParesComponent,GridsComponent,DetallePeliComponent,],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    
    
    

  
  ],
  exports:[SlideNuevoComponent,PosterComponent,ParesComponent,GridsComponent,DetallePeliComponent]
})
export class ComponentsModule { }

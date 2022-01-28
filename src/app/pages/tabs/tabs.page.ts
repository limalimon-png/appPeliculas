import { Component, EventEmitter, Output } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @Output() load = new EventEmitter<boolean>();
  constructor(
    ) {
     
    }

  onClick(){
    this.load.emit(true);
  }
}

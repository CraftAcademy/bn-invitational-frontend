import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthletesPage } from './athletes';

@NgModule({
  declarations: [
    AthletesPage,
  ],
  imports: [
    IonicPageModule.forChild(AthletesPage),
  ],
})
export class AthletesPageModule {}

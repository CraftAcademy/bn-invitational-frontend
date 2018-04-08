import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthletePage } from './athlete';

@NgModule({
  declarations: [
    AthletePage,
  ],
  imports: [
    IonicPageModule.forChild(AthletePage),
  ],
  
})
export class AthletePageModule {}

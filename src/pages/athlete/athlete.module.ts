import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthletePage } from './athlete';
import { ResultsPage } from '../results/results';

@NgModule({
  declarations: [
    AthletePage,
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(AthletePage),
    IonicPageModule.forChild(ResultsPage),
  ],

})
export class AthletePageModule {}
export class ResultsPageModule {}

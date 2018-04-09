import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import { ResultsPage } from '../results/results';
import { AthletesPage } from '../athletes/athletes';
import { ResultsProvider } from '../../providers/results/results';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  results: any[]

  constructor(private resultsProvider: ResultsProvider, private navCtrl: NavController) {
    this.resultsProvider
        .all()
        .subscribe(results => {
            this.results = results.data;
        });
    }

//     launchResultsPage(id) {
//       this.navCtrl.push(ResultsPage, { athlete_id: id });
// }
}

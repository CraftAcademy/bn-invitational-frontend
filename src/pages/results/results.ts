import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import { ResultsPage } from '../results/results';
import { ResultsProvider } from '../../providers/results/results';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  results: any[]

  constructor(private athletesProvider: AthletesProvider, private navCtrl: NavController) {
    this.ResultsProvider
      .all()
      .subscribe(results => {
        this.results = results.data;
      });
    }
}

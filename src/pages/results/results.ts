import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { ResultsProvider } from '../../providers/results/results';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  validResults: any = [];
  invalidResults: any = [];
  readyToPublish: number = 1;
  finalStanding: boolean = false;
  resultsPublished: boolean = false;

  constructor(private resultsProvider: ResultsProvider, private viewCtrl: ViewController) {}

  doRefresh(refresher) {
    this.resultsProvider
      .all()
      .subscribe(results => {
        this.resultsPublished = results.data[0].attributes.hasraced
      });

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }
  
  ionViewDidLoad() {
    this.resultsProvider
      .all()
      .subscribe(results => {
        this.resultsPublished = results.data[0].attributes.hasraced
        for (var i: number = 0; i < results.data.length; i++) {
          if (results.data[i].attributes.validscore == true) {
            this.validResults.push(results.data[i])
          } else {
            this.invalidResults.push(results.data[i])
          }
        }
      });  

      this.viewCtrl.setBackButtonText('');  
  }

  ionViewDidLeave() {
    this.resultsProvider
      .all()
      .subscribe(results => {
        this.resultsPublished = results.data[0].attributes.hasraced
      });
  }

}

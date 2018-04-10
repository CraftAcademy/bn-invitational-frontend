import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ResultsProvider } from '../../providers/results/results';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  validResults: any = []
  invalidResults: any = []

  constructor(private resultsProvider: ResultsProvider) {
    this.resultsProvider
        .all()
        .subscribe(results => {

      console.log(results.data[0].attributes.validscore)
       for( var i:number = 0; i < results.data.length; i++) {
          if (results.data[i].attributes.validscore == true ){
            this.validResults.push(results.data[i])
          } else {
            this.invalidResults.push(results.data[i])
          }
        }
      }
    )
  }
}

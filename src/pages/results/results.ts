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
  readyToPublish:number = 1;
  finalStanding:boolean = false

  constructor(private resultsProvider: ResultsProvider) {
    this.resultsProvider
        .all()
        .subscribe(results => {

        for (var j:number = 0; j < results.data.length; j++){
          if(results.data[j].attributes.validscore == true){
            this.readyToPublish++ 
            console.log(j)
          }
        }
        console.log(this.readyToPublish)
        console.log(results.data.length)
        if(this.readyToPublish == results.data.length){
          this.finalStanding = true
          for( var i:number = 0; i < results.data.length; i++) {
            if (results.data[i].attributes.validscore == true ){
              this.validResults.push(results.data[i])
            } else {
              this.invalidResults.push(results.data[i])
            }
          }
        }
      }
    )
  }
}

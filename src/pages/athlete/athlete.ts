import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthletesPage } from '../athletes/athletes';
import { AthletesProvider } from '../../providers/athletes/athletes';
import { WheelSelector } from '@ionic-native/wheel-selector';

@IonicPage()
@Component({
  selector: 'page-athlete',
  templateUrl: 'athlete.html',
})
export class AthletePage {

  athlete: any[];

  jsonData = {
    numbers: [
      { description: "1" },
      { description: "2" },
      { description: "3" },
      { description: "4" },
      { description: "5" },
      { description: "6" },
      { description: "7" },
      { description: "8" },
      { description: "9" },
      { description: "10" },
    ]
  };

  showSelector() {
    
  }

  selectANumber() {
    this.selector.show({
      title: "1 is BAD 10 is GOOD",
      items: [
        this.jsonData.numbers
      ],
    }).then(
      result => {
        console.log(result[0].description + ' at index: ' + result[0].index);
      },
      err => console.log('Error: ', err)
      );
  }

  constructor(private athletesProvider: AthletesProvider, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private selector: WheelSelector) {

    this.athletesProvider
        .show(this.navParams.get('url'))             
        .subscribe(athlete => {
                this.athlete = athlete.data;
             });
  }

  

  ionViewDidLoad() {
    console.log(this.jsonData);
  }

}

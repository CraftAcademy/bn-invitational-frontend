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
      { vote: "1" },
      { vote: "2" },
      { vote: "3" },
      { vote: "4" },
      { vote: "5" },
      { vote: "6" },
      { vote: "7" },
      { vote: "8" },
      { vote: "9" },
      { vote: "10" },
    ]
  };

  selectANumber() {
    this.selector.show({
      title: "1 is BAD 10 is GOOD",
      items: [
        this.jsonData.numbers
      ],
    }).then(
      result => {
        this.athletesProvider
        .update(this.navParams.get('url'), result.vote)
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

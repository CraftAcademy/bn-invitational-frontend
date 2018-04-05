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
      { description: "3" }
    ],
    fruits: [
      { description: "Apple" },
      { description: "Banana" },
      { description: "Tangerine" }
    ],
    firstNames: [
      { name: "Fred", id: '1' },
      { name: "Jane", id: '2' },
      { name: "Bob", id: '3' },
      { name: "Earl", id: '4' },
      { name: "Eunice", id: '5' }
    ],
    lastNames: [
      { name: "Johnson", id: '100' },
      { name: "Doe", id: '101' },
      { name: "Kinishiwa", id: '102' },
      { name: "Gordon", id: '103' },
      { name: "Smith", id: '104' }
    ]
  };

  constructor(private athletesProvider: AthletesProvider, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private selector: WheelSelector) {

    this.athletesProvider
        .show(this.navParams.get('url'))             
        .subscribe(athlete => {
                console.log(athlete.data.attributes);

                this.athlete = athlete.data;
             });
  }

  

  ionViewDidLoad() {
    let url = this.navParams.get('url'); 
    console.log(this.jsonData);
  }

}

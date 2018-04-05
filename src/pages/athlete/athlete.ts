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
  vote: any;
  message: string;

  jsonData = {
    numbers: [
      { description: "1" },
      { description: "2" },
      { description: "3" }
    ]
  }

  constructor(private athletesProvider: AthletesProvider, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private selector: WheelSelector) {

    this.athletesProvider
        .show(this.navParams.get('athlete_id'))             
        .subscribe(athlete => {
                this.athlete = athlete.data;
             });
  }

  selectANumber() {
    this.selector.show({
      title: "Ratings",
      items: [
        this.jsonData.numbers
      ],
    }).then(
      result => {
       this.vote = result
      },
      err => console.log('Error: ', err)
      );
  }

  clickToVote(id) {
    console.log(this.vote);
    this.athletesProvider
        .update(id, this.vote)
        .subscribe(data => this.message = JSON.stringify(data['status']))
  }


  ionViewDidLoad() {}

}
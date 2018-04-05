import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthletesPage } from '../athletes/athletes';
import { AthletesProvider } from '../../providers/athletes/athletes';

@IonicPage()
@Component({
  selector: 'page-athlete',
  templateUrl: 'athlete.html',
})
export class AthletePage {

  athlete: any[];

  constructor(private athletesProvider: AthletesProvider, private navCtrl: NavController, private navParams: NavParams) {
    this.athletesProvider
        .show(this.navParams.get('url'))             
        .subscribe(athlete => {
                this.athlete = athlete.data;
             });
  }

  ionViewDidLoad() {
  }

}

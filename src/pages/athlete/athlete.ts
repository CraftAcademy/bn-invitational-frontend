import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AthletesPage } from '../athletes/athletes';
import { AthletesProvider } from '../../providers/athletes/athletes';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-athlete',
  templateUrl: 'athlete.html',
})
export class AthletePage {

  athlete: any;
  vote: number = 0;
  votingClosed: boolean = false;
  message: any;
  //athleteVotedOn: any = [];

  constructor(private athletesProvider: AthletesProvider, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private storage: Storage) {

    this.athletesProvider
        .show(this.navParams.get('athlete_id'))             
        .subscribe(athlete => {
            this.athlete = athlete.data;
          });
    
    this.checkIfAtheleteIsVotedOn();
    //this.storage.clear();
  }

  checkIfAtheleteIsVotedOn() {
    let athlete_id: any = this.navParams.get('athlete_id')
    this.storage.forEach( (value, key) => {
      if(value == athlete_id) {
        this.votingClosed = true;
       } else {
        this.votingClosed = false;
       }
      // console.log("This is the value", value)
      // console.log("from the key", key)
    })


  }

  clickToVote(id) {
    this.athletesProvider
        .update(id, this.vote)
        this.votingClosed = true;
        // THIS DOESNT WORK ! ! ! ITS NOT UPDATEING OR SAVING MULTIPLE THINGS
        this.storage.set(this.athlete.id, id);
  }

  ionViewDidLoad() {}

}
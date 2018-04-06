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
  votingClosed: boolean;
  message: any;
  //athleteVotedOn: any = [];
  theValues: [string];

  constructor(private athletesProvider: AthletesProvider, 
              private navCtrl: NavController, 
              private navParams: NavParams,
              private storage: Storage) {
    this.storage.ready().then(() => {
          
            this.storage.get('myValue').then(data => {
              if(data == null) {
                this.storage.set('myValue', ['Initial value']);
              } else {
                this.checkIfAtheleteIsVotedOn(data);
              }
            })
    });

    this.athletesProvider
        .show(this.navParams.get('athlete_id'))             
        .subscribe(athlete => {
            this.athlete = athlete.data;
          });
    
    // this.checkIfAtheleteIsVotedOn();
    // //this.storage.clear();
  }

  checkIfAtheleteIsVotedOn(data) {
    let athlete_id: any = this.navParams.get('athlete_id')
    data.forEach( (value) => {
      if(value == athlete_id) {
        this.votingClosed = true;
       } else {
        this.votingClosed = false;
       }
    });
  }

    clear() {
      this.storage.clear();
    }

    addToStorage() {
      let athlete_id: any = this.navParams.get('athlete_id')
      this.storage.get('myValue').then(data => {
        console.log("Currently: ", data);
        data.push(athlete_id);
        console.log("Currently now:", data);
        this.storage.set("myValue", data);
      });
    }

  clickToVote(id) {
    this.athletesProvider
        .update(id, this.vote)
        this.votingClosed = true;
    this.addToStorage();      
  }

  ionViewDidLoad() {}

}
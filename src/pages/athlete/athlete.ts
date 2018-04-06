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
  votingClosed: boolean = false
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
                //console.log(data)
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
    let athleteId: any = this.navParams.get('athlete_id')
    for(let i:number = 0; i < data.length; i++){
      if(i == athleteId) {
        console.log(i)
      console.log(athleteId)
        this.votingClosed = true;
        break;
       } else {
        this.votingClosed = false;
       }
    }
    // data.forEach( (value) => {
    
    // });
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
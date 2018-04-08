import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  theValues: [string];
  testRadioOpen: boolean;
  testRadioResult;

  constructor(private athletesProvider: AthletesProvider,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private storage: Storage) {

    this.storage.ready().then(() => {
      this.storage.get('myValue').then(data => {
        if (data == null) {
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
  }

  checkIfAtheleteIsVotedOn(data) {
    let athleteId: any = this.navParams.get('athlete_id')
    for (let i: number = 0; i < data.length; i++) {
      if (i == athleteId) {
        this.votingClosed = true;
        break;
      } else {
        this.votingClosed = false;
      }
    }
  }

  clear() {
    this.storage.clear();
  }

  addToStorage() {
    let athlete_id: any = this.navParams.get('athlete_id')
    this.storage.get('myValue').then(data => {
      data.push(athlete_id);
      this.storage.set("myValue", data);
    });
  }

  clickToVote(id) {
    this.athletesProvider
      .update(id, this.vote).subscribe(() => {
        this.votingClosed = true;
        this.addToStorage();
      })
  }

  chooseRating(id) {
    this.alertCtrl.create({
      title: 'Rate',
      inputs: [
        {
          type: 'radio',
          label: '1',
          value: '1'
        },
        {
          type: 'radio',
          label: '2',
          value: '2'
        },
        {
          type: 'radio',
          label: '3',
          value: '3'
        },
        {
          type: 'radio',
          label: '4',
          value: '4'
        },
        {
          type: 'radio',
          label: '5',
          value: '5'
        },
        {
          type: 'radio',
          label: '6',
          value: '6'
        },
        {
          type: 'radio',
          label: '7',
          value: '7'
        },
        {
          type: 'radio',
          label: '8',
          value: '8'
        },
        {
          type: 'radio',
          label: '9',
          value: '9'
        },
        {
          type: 'radio',
          label: '10',
          value: '10'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Vote',
          handler: () => {
            this.clickToVote(id)
            console.log('OK clicked: ', id);
          }
        }
      ]
    }).present();
  }
}

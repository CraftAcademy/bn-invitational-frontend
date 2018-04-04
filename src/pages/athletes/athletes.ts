import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {
  //private apiUrl: string = 'http://localhost:3000/api/v1/articles';
  private apiUrl: string = 'https://votingapi.herokuapp.com/api/v1/athletes';
  athletes: any[];

  constructor(private http: Http, navCtrl: NavController, public navParams: NavParams) {
    this.http.get(this.apiUrl)
             .map((response: Response) => response.json())
             .subscribe(athletes => {
                console.log(athletes);
                this.athletes = athletes.data;
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthletesPage');
  }

}

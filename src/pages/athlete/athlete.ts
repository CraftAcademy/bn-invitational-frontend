import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { resolvePtr } from 'dns';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-athlete',
  templateUrl: 'athlete.html',
})
export class AthletePage {
  //private apiUrl: string = 'http://localhost:3000/api/v1/articles';
  private apiUrl: string = 'https://votingapi.herokuapp.com/api/v1/athletes/#{athlete.id}';
  athlete: any[];

  constructor(private http: Http, navCtrl: NavController, public navParams: NavParams) {
    this.http.get(this.apiUrl)
             .map((response: Response) => response.json())
             .subscribe(athlete => {
                console.log(athlete);
                this.athlete = athlete.data;
             });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AthletePage');
  }

}

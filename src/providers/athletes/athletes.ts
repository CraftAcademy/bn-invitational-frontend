import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AthletesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AthletesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AthletesProvider Provider');
  }

}

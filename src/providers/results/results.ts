import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ResultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResultsProvider {
  private apiUrl: string = 'https://votingapi.herokuapp.com/api/v1/results';

  constructor(private http: Http) {}

  //Get all results
  all() {
    return this.http.get(this.apiUrl)
                    .map((response: Response) => response.json());
  }

}

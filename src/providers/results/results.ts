import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultsProvider {
  private apiUrl: string = 'https://votingapi.herokuapp.com/api/v1/results';

  constructor(private http: Http) {}

  all() {
    return this.http.get(this.apiUrl)
                    .map((response: Response) => response.json());
  }

}

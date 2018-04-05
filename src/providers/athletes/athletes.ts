import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AthletesProvider {
  private apiUrl: string = 'https://votingapi.herokuapp.com/api/v1';
  
  constructor(private http: Http) {}

  // GET athletes
  all() {
    return this.http.get(`${this.apiUrl}/athletes/`)
                    .map((response: Response) => response.json());
  }
  
  // GET athletes/id
  show(url: any) {
    return this.http.get(url)
                    .map((response: Response) => response.json());

  }

}

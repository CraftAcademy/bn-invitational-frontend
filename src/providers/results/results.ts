import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import ENV from "../shared/config";

import "rxjs/add/operator/map";

@Injectable()
export class ResultsProvider {
  private apiUrl: string = ENV.config("prod").apiUrl;
  private uri: string = `${this.apiUrl}/results`;

  constructor(private http: Http) {}

  all() {
    return this.http.get(this.uri).map((response: Response) => response.json());
  }
}

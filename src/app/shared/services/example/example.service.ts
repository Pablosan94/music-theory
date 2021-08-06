import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CardModel} from "@shared/models";
import {Observable} from "rxjs";

import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  getExampleScale(): Observable<CardModel> {
    return this.http.get<CardModel>(`${environment.MT_API}/examples/scale`);
  }
}

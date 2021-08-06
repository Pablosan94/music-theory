import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CardModel} from "@shared/models";
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  getSearchResults(query: string): Observable<CardModel[]> {
    return this.http.get<CardModel[]>(`${environment.MT_API}/search?filter=${query}`);
  }
}

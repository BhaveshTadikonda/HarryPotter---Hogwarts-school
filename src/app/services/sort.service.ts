import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'https://www.potterapi.com/v1/sortingHat';

  public sortHouse(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
}

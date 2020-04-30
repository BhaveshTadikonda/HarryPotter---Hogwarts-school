import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/UserData';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private baseURL = 'https://www.potterapi.com/v1/characters';
  private userURL = "https://jsonplaceholder.typicode.com/users";

  public getCharacters(house: string): any {
    const secret = '$2a$10$YcZxPYOaR44BS437BV1gSugnhOVfzZBBVh0mnWuixCQK2EzMRUjoq';

    const opts = {
      params: new HttpParams({
        fromString: 'key=' + secret + '&house=' + house
      })
    };

    return this.http.get(this.baseURL, opts);

  }
}

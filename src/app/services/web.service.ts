import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from '../interfaces/starship';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(
    private http: HttpClient
  ) { }

  getStarships(): Observable<any> {
    return this.http.get<Starship[]>(this.apiUrl);
  }
}



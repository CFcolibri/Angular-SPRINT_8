import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(
    private http: HttpClient
  ) { }

  getStarships(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


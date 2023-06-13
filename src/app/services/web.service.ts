import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Starship } from '../interfaces/starship';
@Injectable({
  providedIn: 'root'
})
export class WebService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(
    private http: HttpClient
  ) { }

  getStarships(): Observable<Starship[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        const starships: Starship[] = response.results;
        return starships.map((starship: Starship, index: number) => {
          const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`;
          return { ...starship, image: imageUrl };
        });
      })
    );
  }

  getStarshipById(id: string): Observable<Starship> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Starship>(url);
  }
}



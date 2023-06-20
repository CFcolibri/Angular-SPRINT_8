
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../services/web.service';
import { Starship } from '../interfaces/starship';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.css']
})
export class ShipInfoComponent implements OnInit {
  selectedStarship!: Starship;
  starshipImage!: string;
  pilotImages: string[] = [];
  filmImages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private webService: WebService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const starshipId = this.route.snapshot.paramMap.get('id');
    if (starshipId !== null) {
      this.getStarshipById(starshipId);
    }
  }

  getStarshipById(id: string) {
    this.webService.getStarshipById(id).subscribe((starship: Starship) => {
      this.selectedStarship = starship;
      this.getStarshipImageURL(parseInt(id)).then(imageUrl => {
        this.starshipImage = imageUrl;
      });
      this.retrievePilotImages(starship.pilots);
      this.retrieveFilmImages(starship.films);
    });
  }

  async getStarshipImageURL(id: number): Promise<string> {
    try {
      const starshipsImage = await this.http.get<any>('../../assets/img.ships.json').toPromise();
      const starshipImage = starshipsImage.starshipsImage.find((image: any) => image.id === id);
      return starshipImage ? starshipImage.url : '';
    } catch (error) {
      console.error('Error retrieving starship image:', error);
      return '';
    }
  }

  retrievePilotImages(pilotUrls: string[] | undefined) {
    if (pilotUrls && pilotUrls.length > 0) {
      pilotUrls.forEach((pilotUrl, index) => {
        const pilotId = pilotUrl.split('/').slice(-2, -1)[0];
        const pilotImageUrl = this.webService.getPilotImage(parseInt(pilotId));
        this.pilotImages[index] = pilotImageUrl;
      });
    }
  }

  retrieveFilmImages(filmUrls: string[] | undefined) {
    if (filmUrls && filmUrls.length > 0) {
      filmUrls.forEach((filmUrl, index) => {
        const filmId = filmUrl.split('/').slice(-2, -1)[0];
        const filmImageUrl = this.webService.getFilmImage(parseInt(filmId));
        this.filmImages[index] = filmImageUrl;
      });
    }
  }
}

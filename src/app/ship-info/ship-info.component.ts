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
}

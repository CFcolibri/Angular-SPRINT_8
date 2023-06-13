
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../services/web.service';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.css']
})
export class ShipInfoComponent implements OnInit {
  selectedStarship!: Starship;

  constructor(
    private route: ActivatedRoute,
    private webService: WebService
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
    });
  }
}

import { Component } from '@angular/core';
import { StarshipService } from '../starship.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filteredStarships: any[] = [];
  constructor(private starshipService: StarshipService){}

  onClickStarshipButton(): void {
    this.starshipService.getStarships().subscribe(data => {
      // Pass the ship's name and model to the child component
      console.log(this.filteredStarships = data.results.map((starship: { name: string; model: string; }) => ({
        name: starship.name,
        model: starship.model
      })));
    });
  }
}


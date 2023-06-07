
import { Component } from '@angular/core';
import { StarshipService } from '../starship.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filteredStarships: any[] = [];

  constructor(private starshipService: StarshipService) {}

  onClickStarshipButton(): void {
    this.starshipService.getStarships().subscribe(data => {
      this.filteredStarships = data.results;
    });
  }

  receiveFilteredStarships(filteredStarships: any[]): void {
    this.filteredStarships = filteredStarships;
  }
}

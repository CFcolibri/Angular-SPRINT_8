

import { Component } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filteredStarships: any[] = [];

  constructor(private WebService: WebService) {}

  onClickStarshipButton(): void {
    this.WebService.getStarships().subscribe(data => {
      this.filteredStarships = data.results;
    });
  }

  receiveFilteredStarships(filteredStarships: any[]): void {
    this.filteredStarships = filteredStarships;
  }
}

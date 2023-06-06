import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-ship',
  templateUrl: './child-ship.component.html',
  styleUrls: ['./child-ship.component.css']
})
export class ChildShipComponent implements OnChanges {
  @Input() starships: any[] =[];
  filteredStarships: any[] = [];

  constructor() { }

  ngOnChanges() {
    // Filter the starships to include only the name and model properties
    this.filteredStarships = this.starships.map(starship => {
      return { name: starship.name, model: starship.model };
    });
  }
}

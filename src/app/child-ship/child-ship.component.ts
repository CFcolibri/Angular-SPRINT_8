
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-ship',
  templateUrl: './child-ship.component.html',
  styleUrls: ['./child-ship.component.css']
})
export class ChildShipComponent implements OnChanges {
  @Input() starships: any[] = [];
  @Output() filteredStarshipsEvent = new EventEmitter<any[]>();

  filteredStarships: any[] = [];

  constructor() { }

  ngOnChanges() {
    // Filter the starships to include only the name, model, and length properties
    this.filteredStarships = this.starships.map(starship => {
      return { name: starship.name, model: starship.model};
    });

    // Emit the filtered starships to the parent component
    this.filteredStarshipsEvent.emit(this.filteredStarships);
  }
}

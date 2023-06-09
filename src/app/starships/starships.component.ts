import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnChanges {
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

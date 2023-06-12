// import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-starships',
//   templateUrl: './starships.component.html',
//   styleUrls: ['./starships.component.css']
// })
// export class StarshipsComponent implements OnChanges {
//   @Input() starships: any[] = [];
//   // @Output() filteredStarshipsEvent = new EventEmitter<any[]>();

//   filteredStarships: any[] = [];

//   constructor(
//     private router: Router
//   ) { }

//   ngOnChanges() {
//     // Filter the starships to include only the name, model, and length properties
//     this.filteredStarships = this.starships.map(starship => {
//       return { name: starship.name, model: starship.model};
//     });

//   }
// }

import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.webService.getStarships().subscribe((data: { results: any[]; }) => {
      this.starships = data.results;
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { WebService } from '../services/web.service';
// import { Starship } from '../interfaces/starship';

// @Component({
//   selector: 'app-starships',
//   templateUrl: './starships.component.html',
//   styleUrls: ['./starships.component.css']
// })
// export class StarshipsComponent implements OnInit {
//   starships: Starship[] = [];

//   constructor(private webService: WebService) { }

//   ngOnInit() {
//     this.getStarships();
//   }

//   getStarships() {
//     this.webService.getStarships().subscribe((data: { results: any[]; }) => {
//       this.starships = data.results;
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
    this.webService.getStarships().subscribe((data:Starship[] ) => {
      this.starships = data;
    });
  }

  extractStarshipId(url?: string): string {
    if (url) {
      const parts = url.split('/');
      return parts[parts.length - 2];
    }
    return '';
  }
}


import { Component, OnInit, HostListener } from '@angular/core';
import { WebService } from '../services/web.service';
import { Starship } from '../interfaces/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];
  loading = false;

  constructor(private webService: WebService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.loading = true;
    this.webService.getStarships(this.starships.length).subscribe((data: Starship[]) => {
      this.starships = this.starships.concat(data);
      this.loading = false;
    });
  }

  extractStarshipId(url?: string): string {
    if (url) {
      const parts = url.split('/');
      return parts[parts.length - 2];
    }
    return '';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = event.target.documentElement.scrollTop;
    const windowHeight = event.target.documentElement.clientHeight;
    const scrollHeight = event.target.documentElement.scrollHeight;

    const isScrolledToBottom = scrollTop + windowHeight >= scrollHeight;
    if (isScrolledToBottom && !this.loading) {
      this.getStarships();
    }
  }
}

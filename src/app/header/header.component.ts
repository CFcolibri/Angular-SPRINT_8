

import { Component } from '@angular/core';
import { WebService } from '../services/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  filteredStarships: any[] = [];

  constructor(
    private WebService: WebService,
    private router : Router) {}
}

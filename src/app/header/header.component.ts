

import { Component } from '@angular/core';
import { WebService } from '../services/web.service';
import { Router } from '@angular/router';
import { AccountService } from '@app/services/account.service';
import { User } from '@app/_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  filteredStarships: any[] = [];
  isLogged: boolean = false;
  user?: User | null;

  constructor(
    private WebService: WebService,
    private router : Router,
    private accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
      this.isLogged = this.accountService.userValue !== null;
      this.accountService.user.subscribe(user => {
      this.isLogged = user !== null;
      });
    }

    get auth() {
      return this.accountService.userValue?.username;
    }

    logout() {
      this.accountService.logout();
      this.router.navigate(['/']);
    }
}


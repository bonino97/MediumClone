import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  isLoggedIn$: Observable<boolean>;
  isAnonymus$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface>;

  constructor() {}

  ngOnInit(): void {}
}

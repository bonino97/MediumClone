import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  currentUserSelector,
  isAnonymusSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

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

  constructor(private store: Store) {}

  ngOnInit(): void { 
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymus$ = this.store.pipe(select(isAnonymusSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}

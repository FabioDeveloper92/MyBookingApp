import { Component } from '@angular/core';
import { GoAction } from '../../router.actions';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private store: Store<AppState>) {}

  onLogin(): void {
    this.store.dispatch(GoAction({ path: ['dashboard'] }));
  }
}

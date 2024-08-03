import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { GoAction } from '../../router.actions';

@Component({
  selector: 'app-not-found.component',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(private store: Store<AppState>) {}

  goToHome(): void {
    this.store.dispatch(GoAction({ path: ['/'] }));
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { GoAction } from '../../../router.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(private store: Store<AppState>) {}
  
  onClickNewAppoinment(): void {
    this.store.dispatch(GoAction({ path: ['/appointment'] }));
  }
}

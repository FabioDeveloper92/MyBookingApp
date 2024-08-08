import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { GoAction } from '../../../router.actions';
import { selectAppointments } from './dashboard.selector';
import { Observable } from 'rxjs';
import { AppointmentInfo } from '../../../core/model/appointment-info.model';
import { AppointmentsListComponent } from '../../components/appointments-list/appointments-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AppointmentsListComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  appointments$: Observable<AppointmentInfo[]>;

  constructor(private store: Store<AppState>) {
    this.appointments$ = this.store.select(selectAppointments);
  }
  
  onClickNewAppoinment(): void {
    this.store.dispatch(GoAction({ path: ['/appointment'] }));
  }
}

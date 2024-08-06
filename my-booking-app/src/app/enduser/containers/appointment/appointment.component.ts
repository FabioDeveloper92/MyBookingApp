import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppointmentState } from './appointment.state';
import { selectServices } from './appointment.selector';
import { Service } from '../../../core/model/service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  services$: Observable<Service[]>;

  constructor(private store: Store<AppointmentState>) {
    this.services$ = this.store.select(selectServices);
  }
}

import { Component, Input } from '@angular/core';
import { AppointmentInfo } from '../../../core/model/appointment-info.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments-list.component.html'
})
export class AppointmentsListComponent {
  @Input() appointments: AppointmentInfo[] | null = [];
}

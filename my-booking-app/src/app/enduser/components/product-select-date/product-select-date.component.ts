import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AppointmentInfo } from '../../../core/model/appointment-info.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-select-date',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-select-date.component.html'
})
export class ProductSelectDateComponent implements OnInit {
  @Input() appointmentInfo: AppointmentInfo | null = null;
  @Output() onBook = new EventEmitter<{ date: string, time: string }>();
  @Output() onCancel = new EventEmitter<void>();

  selectedDate: string = "";
  minDate: string = "";
  selectedTime: string = "";

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.minDate = tomorrow.toISOString().split('T')[0];
  }

  onCancelEvent():void{
    this.onCancel.emit();
  }

  onBookEvent():void{
    this.onBook.emit({ date: this.selectedDate, time: this.selectedTime });
  }

  isFormValid(): boolean {
    return !!this.selectedDate && !!this.selectedTime;
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppointmentState } from './appointment.state';
import { selectAppointmentProduct, selectProducts as selectProducts } from './appointment.selector';
import { Product } from '../../../core/model/product.model';
import { CommonModule } from '@angular/common';
import { AddProductAppointment, AddProductAppointmentDate, CancelProductAppointment } from './appointment.actions';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductSelectDateComponent } from '../../components/product-select-date/product-select-date.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductSelectDateComponent],
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent {
  products$: Observable<Product[]>;
  selectProduct$: Observable<Product | null>;

  constructor(private store: Store<AppointmentState>) {
    this.products$ = this.store.select(selectProducts);
    this.selectProduct$ = this.store.select(selectAppointmentProduct);
  }

  onSelectProduct(product:Product):void {
    this.store.dispatch(AddProductAppointment({product:product}));
  }

  onBook($event: { date: string, time: string }):void {
    this.store.dispatch(AddProductAppointmentDate({date:$event.date, time:$event.time}));
  }

  onCancel():void {
    this.store.dispatch(CancelProductAppointment());
  }
}

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';
import { Product } from '../../../core/model/product.model';

export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointment');

export const selectProducts = createSelector(
    selectAppointmentState,
    (state: AppointmentState) => state?.products ?? []
  );

export const selectAppointmentProduct = createSelector(
    selectAppointmentState,
    (state: AppointmentState) => state?.selectAppointmentProduct
  );

  
export const selectAppointmentDate = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state?.selectAppointmentDate
);


export const selectAppointmentTime = createSelector(
  selectAppointmentState,
  (state: AppointmentState) => state?.selectAppointmentTime
);
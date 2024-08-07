import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';

export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointment');

export const selectProducts = createSelector(
    selectAppointmentState,
    (state: AppointmentState) => state?.products ?? []
  );

export const selectAppointment = createSelector(
    selectAppointmentState,
    (state: AppointmentState) => state?.selectAppointment
  );
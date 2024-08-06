import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppointmentState } from './appointment.state';

export const selectAppointmentState = createFeatureSelector<AppointmentState>('appointment');

export const selectServices = createSelector(
    selectAppointmentState,
    (state: AppointmentState) => state?.services ?? []
  );
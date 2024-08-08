import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { AppointmentReducer } from './containers/appointment/appointment.reducers';
import { AppointmentEffects } from './containers/appointment/appointment.effects';
import { provideEffects } from '@ngrx/effects';
import { DashboardReducer } from './containers/dashboard/dashboard.reducers';
import { DashboardEffects } from './containers/dashboard/dashboard.effects';

export const endUserConfig: ApplicationConfig = {
  providers: [
     provideState({name: 'appointment', reducer: AppointmentReducer}), 
     provideState({name: 'dashboard', reducer:DashboardReducer}), 
     provideEffects([AppointmentEffects,DashboardEffects]),
    ]
};

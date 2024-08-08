import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectAppointments = createSelector(
  selectDashboardState,
    (state: DashboardState) => state?.appointments ?? []
  );

import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { DashboardComponent } from './enduser/containers/dashboard/dashboard.component';
import { AppointmentComponent } from './enduser/containers/appointment/appointment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: '**', component: NotFoundComponent }
  ];
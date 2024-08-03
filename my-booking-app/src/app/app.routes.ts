import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
  ];
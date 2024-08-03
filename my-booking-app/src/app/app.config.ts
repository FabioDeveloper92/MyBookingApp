import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppReducers } from './app.reducers';
import { AppMetaReducers } from './app-meta.reducers';
import { RouterEffects } from './router.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
     provideStore(AppReducers, { metaReducers: AppMetaReducers }), 
    provideEffects([RouterEffects]),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
};

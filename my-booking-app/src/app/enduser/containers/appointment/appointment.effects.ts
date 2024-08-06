import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ofRoute } from '../../../router.operator';
import { LoadServices, LoadServicesError, LoadServicesSuccess } from './appointment.actions';
import { ErrorPayload } from '../../../core/model/error-payload.model';
import { ProductService } from '../../../core/service/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable()
export class AppointmentEffects {

  loadAppointmentPage = createEffect(() =>
    this.actions$.pipe(
      ofRoute('/appointment'),
      map(_ => LoadServices() )
    )
  );

  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadServices),
      switchMap(() =>
         this.productService.getServices().pipe(
          map(services => LoadServicesSuccess({ services })),
          catchError(_ =>
            of(LoadServicesError({ error: new ErrorPayload(500, "errore caricamento") }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private productService: ProductService,
    private router: Router
  ) {

  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.router.url === '/appointment')
    ).subscribe((a) => {
      this.store.dispatch(LoadServices());
    });  

  }
}

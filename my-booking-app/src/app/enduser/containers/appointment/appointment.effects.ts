import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, combineLatest, filter, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ofRoute } from '../../../router.operator';
import { AddProductAppointmentDate, LoadProducts, LoadProductsError, LoadProductsSuccess, SaveAppointmentError, SaveAppointmentSuccess } from './appointment.actions';
import { ErrorPayload } from '../../../core/model/error-payload.model';
import { ProductService } from '../../../core/service/product.service';
import { NavigationEnd, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppointmnetService } from '../../../core/service/appointment.service';
import { selectAppointment, selectAppointmentState } from './appointment.selector';
import { GoAction } from '../../../router.actions';

@Injectable()
export class AppointmentEffects {

  loadAppointmentPage = createEffect(() =>
    this.actions$.pipe(
      ofRoute('/appointment'),
      map(_ => LoadProducts() )
    )
  );

  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadProducts),
      switchMap(() =>
         this.productService.getProducts().pipe(
          map(services => LoadProductsSuccess({ products: services })),
          catchError(_ =>
            of(LoadProductsError({ error: new ErrorPayload(500, "errore caricamento") }))
          )
        )
      )
    )
  );

  addProductAppointmentDate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddProductAppointmentDate),
      switchMap(() =>
        this.store.pipe(
          select(selectAppointment),
          switchMap(appointmentInfo => {
              return this.appointmentService.saveAppointment(appointmentInfo).pipe(
                map(response => SaveAppointmentSuccess()),
                catchError(error =>
                  of(SaveAppointmentError({ error: new ErrorPayload(error.status || 500, error.message || "Errore caricamento") }))
                )
              );
          })
        )
      )
    )
  );

  saveAppointmentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SaveAppointmentSuccess),
      map(() => GoAction({ path: ['/dashboard'] }))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private productService: ProductService,
    private appointmentService: AppointmnetService,
    private router: Router
  ) {

  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.router.url === '/appointment')
    ).subscribe((a) => {
      this.store.dispatch(LoadProducts());
    });  

  }
}

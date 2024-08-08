import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { ofRoute } from '../../../router.operator';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppointmnetService } from '../../../core/service/appointment.service';
import { LoadAppointments, LoadAppointmentsError, LoadAppointmentsSuccess } from './dashboard.actions';
import { ErrorPayload } from '../../../core/model/error-payload.model';

@Injectable()
export class DashboardEffects {

  loadDashBoardPage = createEffect(() =>
    this.actions$.pipe(
      ofRoute('/dashboard'),
      map(_ => LoadAppointments() )
    )
  );

  loadAppointments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadAppointments),
      switchMap(() =>
         this.appointmentService.getAppointments().pipe(
          map(appointments => LoadAppointmentsSuccess({ appointments: appointments })),
          catchError(_ =>
            of(LoadAppointmentsError({ error: new ErrorPayload(500, "errore caricamento") }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private appointmentService: AppointmnetService,
    private router: Router
  ) {

  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => this.router.url === '/dashboard')
    ).subscribe((a) => {
      this.store.dispatch(LoadAppointments());
    });  

  }
}

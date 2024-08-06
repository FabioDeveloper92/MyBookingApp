// src/app/store/router.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import * as RouterActions from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }
  
  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.GoAction),
      map(action => action),
      tap(({ path, query, extras }) => {
        this.router.navigate(path, { queryParams: query, ...extras });
      })
    ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.BackAction),
      tap(() => this.router.navigate(['../']))
    ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.ForwardAction),
      tap(() => this.router.navigate(['./']))
    ),
    { dispatch: false }
  );

}

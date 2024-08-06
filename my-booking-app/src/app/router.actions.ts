import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GoAction = createAction(
  '[Router] Go',
  props<{ path: any[]; query?: object; extras?: NavigationExtras }>()
);

export const BackAction = createAction('[Router] Back');
export const ForwardAction = createAction('[Router] Forward');
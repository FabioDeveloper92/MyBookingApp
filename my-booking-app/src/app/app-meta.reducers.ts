import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment.dev';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before:', state);
    console.log('action:', action);
    return reducer(state, action);
  };
}

export const AppMetaReducers: MetaReducer<any>[] = !environment.production ? [logger] : [];

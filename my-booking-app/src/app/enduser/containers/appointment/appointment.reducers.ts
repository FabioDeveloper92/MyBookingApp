import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppointmentState } from "./appointment.state";
import { LoadServices, LoadServicesError, LoadServicesSuccess } from "./appointment.actions";

export const initialState: AppointmentState = {
  isLoading: false,
  services: [],
  error: null,
};

export const AppointmentReducer = createReducer(
  initialState,
  on(LoadServices, state => ({
    ...state,
    isLoading: true,
    error:null,
    services:[]
  })),
  on(LoadServicesSuccess, (state, { services }) => ({
    ...state,
    isLoading: false,
    services
  })),
  on(LoadServicesError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
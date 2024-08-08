import { createReducer, on } from "@ngrx/store";
import { DashboardState } from "./dashboard.state";
import { LoadAppointments, LoadAppointmentsError, LoadAppointmentsSuccess } from "./dashboard.actions";

export const initialState: DashboardState = {
    isLoading: false,
    error: null,
    appointments: []
  };

  export const DashboardReducer = createReducer(
    initialState,
    on(LoadAppointments, state => ({
        ...state,
        isLoading: true,
        error:null,
        appointments:[]
      })),
    on(LoadAppointmentsSuccess, (state,{appointments: appointments}) => ({
        ...state,
        isLoading: false,
        appointments:appointments
      })),
    on(LoadAppointmentsError, (state,{error: error}) => ({
        ...state,
        isLoading: false,
        error:error
      }))
  );
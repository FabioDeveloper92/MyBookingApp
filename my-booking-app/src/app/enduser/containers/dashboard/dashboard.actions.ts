import { createAction, props } from "@ngrx/store";
import { ErrorPayload } from "../../../core/model/error-payload.model";
import { AppointmentInfo } from "../../../core/model/appointment-info.model";

export const LoadAppointments = createAction(
    '[Dashboard] Load Appointments'
  );
  
  export const LoadAppointmentsSuccess = createAction(
    '[Dashboard] Load Appointments Success',
    props<{ appointments: AppointmentInfo[] }>()
  );

  export const LoadAppointmentsError = createAction(
    '[Dashboard] Load Appointments Error',
   props<{ error: ErrorPayload }>()
  );  
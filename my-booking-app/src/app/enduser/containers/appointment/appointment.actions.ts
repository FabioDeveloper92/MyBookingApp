import { createAction, props } from "@ngrx/store";
import { ErrorPayload } from "../../../core/model/error-payload.model";
import { Service } from "../../../core/model/service.model";

export const NewAppointment = createAction(
    '[Appointment] New Appointment'
  );

  export const LoadServices = createAction(
      '[Appointment] Load Services'
    );
    
    export const LoadServicesSuccess = createAction(
      '[Appointment] Load Services Success',
      props<{ services: Service[] }>()
    );

    export const LoadServicesError = createAction(
      '[Appointment] Load Services Error',
     props<{ error: ErrorPayload }>()
    );
import { createAction, props } from "@ngrx/store";
import { ErrorPayload } from "../../../core/model/error-payload.model";
import { Product } from "../../../core/model/product.model";

export const NewAppointment = createAction(
    '[Appointment] New Appointment'
  );

  export const LoadProducts = createAction(
      '[Appointment] Load Products'
    );
    
    export const LoadProductsSuccess = createAction(
      '[Appointment] Load Products Success',
      props<{ products: Product[] }>()
    );

    export const LoadProductsError = createAction(
      '[Appointment] Load Products Error',
     props<{ error: ErrorPayload }>()
    );  
    
    export const AddProductAppointment = createAction(
      '[Appointment] Add Product Appointment',
      props<{ product: Product }>()
    );

    export const AddProductAppointmentDate = createAction(
      '[Appointment] Add Product Appointment Date',
      props<{ date: string, time: string }>()
    );

    export const CancelProductAppointment = createAction(
        '[Appointment] Cancel Product Appointment'
      );

    export const SaveAppointmentSuccess = createAction(
        '[Appointment] Save Appointment Success'
      );

    export const SaveAppointmentError = createAction(
        '[Appointment] Save Appointment Error',
        props<{ error: ErrorPayload }>()
      );
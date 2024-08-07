import { AppointmentInfo } from "../../../core/model/appointment-info.model";
import { ErrorPayload } from "../../../core/model/error-payload.model";
import { Product } from "../../../core/model/product.model";

export interface AppointmentState {
  isLoading: boolean,
  products: Product[],
  error: ErrorPayload | null,
  selectAppointment: AppointmentInfo | null,
}
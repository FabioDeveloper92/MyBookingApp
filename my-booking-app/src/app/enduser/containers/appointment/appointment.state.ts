import { ErrorPayload } from "../../../core/model/error-payload.model";
import { Product } from "../../../core/model/product.model";

export interface AppointmentState {
  isLoading: boolean,
  products: Product[],
  error: ErrorPayload | null,
  selectAppointmentProduct: Product | null,
  selectAppointmentDate: string | null,
  selectAppointmentTime: string | null
}
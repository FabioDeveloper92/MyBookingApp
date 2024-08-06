import { ErrorPayload } from "../../../core/model/error-payload.model";
import { Service } from "../../../core/model/service.model";

export interface AppointmentState {
  isLoading: boolean,
  services: Service[],
  error: ErrorPayload | null,
}
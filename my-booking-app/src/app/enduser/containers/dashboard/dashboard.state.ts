import { AppointmentInfo } from "../../../core/model/appointment-info.model";
import { ErrorPayload } from "../../../core/model/error-payload.model";

export interface DashboardState {
  isLoading: boolean,
  error: ErrorPayload | null,
  appointments: AppointmentInfo[],
}
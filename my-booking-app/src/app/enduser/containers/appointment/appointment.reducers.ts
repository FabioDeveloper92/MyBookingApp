import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { AppointmentState } from "./appointment.state";
import { LoadProducts, LoadProductsError, LoadProductsSuccess, AddProductAppointment, CancelProductAppointment, SaveAppointmentSuccess, SaveAppointmentError } from "./appointment.actions";
import { AppointmentInfo } from "../../../core/model/appointment-info.model";

export const initialState: AppointmentState = {
  isLoading: false,
  products: [],
  error: null,
  selectAppointment: null,
};

export const AppointmentReducer = createReducer(
  initialState,
  on(LoadProducts, state => ({
    ...state,
    isLoading: true,
    error:null,
    products:[]
  })),
  on(LoadProductsSuccess, (state, { products: services }) => ({
    ...state,
    isLoading: false,
    products: services
  })),
  on(LoadProductsError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(AddProductAppointment, (state, { product }) => ({
    ...state,
    selectAppointment: new AppointmentInfo(product)
  })),
  on(CancelProductAppointment, (state) => ({
    ...state,
    selectAppointment: null
  })),
  on(SaveAppointmentSuccess, (state) => ({
    ...state,
    isLoading: false,
    selectAppointment: null
  })),
  on(SaveAppointmentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
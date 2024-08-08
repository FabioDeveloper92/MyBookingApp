import { createReducer, on } from "@ngrx/store";
import { AppointmentState } from "./appointment.state";
import { LoadProducts, LoadProductsError, LoadProductsSuccess, AddProductAppointment, CancelProductAppointment, SaveAppointmentSuccess, SaveAppointmentError, AddProductAppointmentDate } from "./appointment.actions";

export const initialState: AppointmentState = {
  isLoading: false,
  products: [],
  error: null,
  selectAppointmentProduct: null,
  selectAppointmentDate: null,
  selectAppointmentTime: null
};

export const AppointmentReducer = createReducer(
  initialState,
  on(LoadProducts, state => ({
    ...state,
    isLoading: true,
    error:null,
    products:[]
  })),
  on(LoadProductsSuccess, (state, { products: products }) => ({
    ...state,
    isLoading: false,
    products: products
  })),
  on(LoadProductsError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(AddProductAppointment, (state, { product }) => ({
    ...state,
    selectAppointmentProduct: product
  })),
  on(AddProductAppointmentDate, (state, { date, time }) => ({
    ...state,
    selectAppointmentDate: date,
    selectAppointmentTime: time
  })),
  on(CancelProductAppointment, (state) => ({
    ...state,
    selectAppointmentProduct: null,
    selectAppointmentDate: null,
    selectAppointmentTime: null
  })),
  on(SaveAppointmentSuccess, (state) => ({
    ...state,
    isLoading: false,
    selectAppointmentProduct: null,
    selectAppointmentDate: null,
    selectAppointmentTime: null
  })),
  on(SaveAppointmentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);
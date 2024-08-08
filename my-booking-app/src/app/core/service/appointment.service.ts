import { delay, Observable, of } from "rxjs";
import { Product } from "../model/product.model";
import { Injectable } from "@angular/core";
import { AppointmentInfo } from "../model/appointment-info.model";

@Injectable({
    providedIn: 'root'
  })
export class AppointmnetService {
     keyLocalStorage: string = "appointments";

    constructor() {}
  
    saveAppointment(product: Product | null, date: string| null, time: string| null): Observable<boolean> {
        if(!product || ! date || !time)
            throw new Error("Valori nulli");

        const appointmentInfo = new AppointmentInfo(product, date, time);

        const storedAppointments = localStorage.getItem(this.keyLocalStorage);
        let appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
        appointments.push(appointmentInfo);
        localStorage.setItem(this.keyLocalStorage, JSON.stringify(appointments));

        return of(true).pipe(delay(200));
    }

    getAppointments(): Observable<AppointmentInfo[]> {
        debugger;
        const storedAppointments = localStorage.getItem(this.keyLocalStorage);
        let values = storedAppointments ? JSON.parse(storedAppointments) : [];

        return of(values).pipe(delay(200));
    }
}
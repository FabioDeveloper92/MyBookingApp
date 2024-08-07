import { delay, Observable, of } from "rxjs";
import { Product } from "../model/product.model";
import { Injectable } from "@angular/core";
import { AppointmentInfo } from "../model/appointment-info.model";

@Injectable({
    providedIn: 'root'
  })
export class AppointmnetService {
    constructor() {}
  
    services: Product[] = [
        new Product(1, "Servizio 1", 5.00),
        new Product(2, "Servizio 2", 23.23),
        new Product(3, "Servizio 3", 7),
    ];

    // Metodo per ottenere la lista degli appuntamenti
    saveAppointment(appointmentInfo: AppointmentInfo | null): Observable<boolean> {
        return of(true).pipe(delay(200));
    }
}
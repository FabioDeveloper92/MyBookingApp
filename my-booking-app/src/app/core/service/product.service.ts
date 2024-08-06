import { delay, Observable, of } from "rxjs";
import { Service } from "../model/service.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductService {
    constructor() {}
  
    services: Service[] = [
        new Service(1, "Servizio 1", 5.00),
        new Service(2, "Servizio 2", 23.23),
        new Service(3, "Servizio 3", 7),
    ];

    // Metodo per ottenere la lista degli appuntamenti
    getServices(): Observable<Service[]> {
        return of(this.services).pipe(delay(1000));
    }
}
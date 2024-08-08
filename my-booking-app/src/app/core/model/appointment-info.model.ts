import { Product } from "./product.model";

export class AppointmentInfo {
    product: Product;
    date: string;
    time: string;

    constructor(product: Product, date: string, time: string){
        this.product = product;
        this.date = date;
        this.time = time;
    }
}
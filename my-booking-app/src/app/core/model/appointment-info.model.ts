import { Product } from "./product.model";

export class AppointmentInfo {
    product: Product;

    constructor(product: Product){
        this.product = product;
    }
}
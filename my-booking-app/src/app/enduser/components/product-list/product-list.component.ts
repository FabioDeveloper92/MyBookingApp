import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() onProductSelected = new EventEmitter<Product>();

  onSelectProduct(product: Product): void {
    this.onProductSelected.emit(product); 
  }
}

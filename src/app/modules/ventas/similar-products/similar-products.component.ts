import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  @Input() main_product?: Product | undefined | null;

  @Output() buttonOpenModal = new EventEmitter<Product>();

  onOpenModal(productName: Product) {
    this.buttonOpenModal.emit(productName);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})

export class SimilarProductsComponent {

  @Input() main_product?: {
    image: string;
    product: string;
    price: number;
    currency: string;
    rating: number;
    description: string;
    similarProducts: {
      image: string;
      product: string;
      price: number;
      currency: string;
      rating: number;
      description: string;
    }[];
    reviews: {
      image: string;
      name: string;
      rating: number;
      opinion: string;
      date: string;
    }[];
  };

  @Output() buttonOpenModal = new EventEmitter<string>();

  onOpenModal(productName: string) {
    this.buttonOpenModal.emit(productName);
  }

}

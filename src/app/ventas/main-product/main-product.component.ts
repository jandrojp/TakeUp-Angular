import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
})
export class MainProductComponent {
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
    favourite: boolean;
  };

  @Output() buttonDeleteProduct = new EventEmitter<string>();

  onDeleteProduct(productDeleteName: string) {
    this.buttonDeleteProduct.emit(productDeleteName);
  }

  buttonFavourite() {
    if (this.main_product?.favourite == false) {
      this.main_product.favourite = true;
    } else {
      this.main_product!.favourite = false;
    }
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss'],
})
export class MainProductComponent {
  @Input() main_product: Product | undefined | null;

  @Output() buttonDeleteProduct = new EventEmitter<string>();
  @Output() buttonAddProduct = new EventEmitter<Product>();

  mainProduct$: Observable<Product | null> = new Observable<Product | null>();

  onDeleteProduct(productDeleteName: string) {
    this.buttonDeleteProduct.emit(productDeleteName);
  }

  onAddProduct(productAddName: Product) {
    this.buttonAddProduct.emit(productAddName);
    console.log(this.mainProduct$);
  }

  buttonFavourite() {
    if (this.main_product?.favourite == false) {
      this.main_product.favourite = true;
    } else {
      this.main_product!.favourite = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  products$ = this.productService.CartProductsObservableData;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  removeProduct(product: Product) {
    this.productService.removeProductFromCart(product);
  }
}

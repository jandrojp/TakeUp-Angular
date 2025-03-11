import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  filteredProducts$: Observable<Product[]> = new Observable<Product[]>();
  mainProduct$: Observable<Product | null> = new Observable<Product | null>();

  modalProduct: Product | null = null;
  isModalOpen: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProducts();

    this.products$ = this.productService.ProductsObservableData;
    this.filteredProducts$ = this.productService.FilteredProductsObservableData;
    this.mainProduct$ = this.productService.SelectedProductObservableData;
  }

  changeMainProduct(product: Product) {
    this.productService.setSelectedProduct(product);
  }

  openModal(product: Product) {
    this.isModalOpen = true;
    this.modalProduct = product;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  deleteMainProduct(productName: string) {
    this.productService.deleteProductByName(productName);

    this.products$.subscribe((products) => {
      if (products.length > 0) {
        this.productService.setSelectedProduct(products[0]);
      } else {
        this.productService.setSelectedProduct(null);
      }
    });
  }

  addMainProduct(product: Product) {
    this.productService.addProductToCart(product);
    alert('Producto añadido al carrito correctamente !');
  }
}

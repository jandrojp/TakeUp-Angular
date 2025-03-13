import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  products$: Product[] = [];
  filteredProducts$: Product[] = [];
  mainProduct$?: Product | null;

  modalProduct: Product | null = null;
  isModalOpen: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.fetchProducts();

    this.productService.getProductsObservableData().subscribe((data) => {
      this.products$ = data;
    });

    this.productService
      .getFilteredProductsObservableData()
      .subscribe((data) => {
        this.filteredProducts$ = data;
      });

    this.productService.getSelectedProductObservableData().subscribe((data) => {
      if (this.products$.length > 0) {
        this.mainProduct$ = data;
      }
    });
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

  deleteMainProduct(product: Product) {
    this.productService.removeProductFromList(product);
  }

  addMainProduct(product: Product) {
    this.productService.addProductToCart(product);
    alert('Producto añadido al carrito correctamente !');
  }
}

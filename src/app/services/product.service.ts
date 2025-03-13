import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = '../../assets/data/productos.json';

  private _myProducts: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _filteredProducts: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _selectedProduct: BehaviorSubject<Product | null> =
    new BehaviorSubject<Product | null>(null);

  constructor(private http: HttpClient) {}

  fetchProducts(): void {
    if (this._myProducts.getValue().length > 0) {
      return; // Evitar sobreescribir la lista si ya hay productos cargados
    }

    this.http.get<Product[]>(this.productsUrl).subscribe({
      next: (products: Product[]) => {
        this._myProducts.next(products);
        this._filteredProducts.next(products);
        this._selectedProduct.next(products[0]);
      },
      error: (error) => {
        console.error('Error al cargar los productos', error);
      },
    });
  }

  getProductsObservableData(): Observable<Product[]> {
    return this._myProducts.asObservable();
  }

  getFilteredProductsObservableData(): Observable<Product[]> {
    return this._filteredProducts.asObservable();
  }

  get CartProductsObservableData(): Observable<Product[]> {
    return this._cartProducts.asObservable();
  }

  getSelectedProductObservableData(): Observable<Product | null> {
    return this._selectedProduct.asObservable();
  }

  setSelectedProduct(product: Product | null): void {
    this._selectedProduct.next(product);
  }

  setFilteredProducts(products: Product[]): void {
    this._filteredProducts.next(products);
  }

  setCartProducts(products: Product[]): void {
    this._cartProducts.next(products);
  }

  addProductToCart(product: Product): void {
    const currentCart = this._cartProducts.getValue();
    this._cartProducts.next([...currentCart, product]);

    this._cartProducts.getValue().forEach((item) => {
      item.add = true;
    });
  }

  addProductToList(product: Product): void {
    const currentProducts = this._myProducts.getValue();
    this._myProducts.next([...currentProducts, product]);
  }

  removeProductFromList(product: Product): void {
    const updatedProducts = this._myProducts
      .getValue()
      .filter((item) => item.product !== product.product);

    this._myProducts.next(updatedProducts);
    this._filteredProducts.next(updatedProducts);

    this._selectedProduct.next(
      updatedProducts.length > 0 ? updatedProducts[0] : null
    );
  }

  removeProductFromCart(product: Product): void {
    product.add = false;
    const currentCart = this._cartProducts.getValue();
    const updatedCart = currentCart.filter(
      (item) => item.product !== product.product
    );
    this._cartProducts.next(updatedCart);
  }
}

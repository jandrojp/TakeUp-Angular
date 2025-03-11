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

  get ProductsObservableData(): Observable<Product[]> {
    return this._myProducts.asObservable();
  }

  get FilteredProductsObservableData(): Observable<Product[]> {
    return this._filteredProducts.asObservable();
  }

  get CartProductsObservableData(): Observable<Product[]> {
    return this._cartProducts.asObservable();
  }

  get SelectedProductObservableData(): Observable<Product | null> {
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

  removeProductFromCart(product: Product): void {
    product.add = false;
    const currentCart = this._cartProducts.getValue();
    const updatedCart = currentCart.filter(
      (item) => item.product !== product.product
    );
    this._cartProducts.next(updatedCart);
  }

  deleteProductByName(productName: string): void {
    const currentProducts = this._myProducts.getValue();
    const updatedProducts = currentProducts.filter(
      (product) => product.product !== productName
    );

    this._myProducts.next(updatedProducts);
    this._filteredProducts.next(updatedProducts);
    if (this._selectedProduct.getValue()?.product === productName) {
      this._selectedProduct.next(
        updatedProducts.length > 0 ? updatedProducts[0] : null
      );
    }
  }
}

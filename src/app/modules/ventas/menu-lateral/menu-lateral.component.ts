import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnChanges {
  @Output() buttonChangeMainProduct = new EventEmitter<Product>();

  @Input() products_list?: Product[];

  filteredProducts: Product[] | undefined;

  selectedProduct?: Product;
  isFiltroValoracion!: boolean;
  isFiltro15?: boolean;
  isFiltroOpinion?: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products_list'] && this.products_list) {
      this.filteredProducts = [...this.products_list];
    }
  }

  botonFiltro15() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(
        (product) => product.price > 15
      );
      this.isFiltroValoracion = false;
      this.isFiltro15 = true;
      this.isFiltroOpinion = false;
    }
  }

  botonFiltroValoracion() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(
        (product) => product.rating >= 4.5
      );
      this.isFiltroValoracion = true;
      this.isFiltro15 = false;
      this.isFiltroOpinion = false;
    }
  }

  botonFiltroOpinion() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(
        (product) => product.reviews && product.reviews.length > 0
      );
      this.isFiltroValoracion = false;
      this.isFiltro15 = false;
      this.isFiltroOpinion = true;
    }
  }

  borrarFiltro() {
    if (this.products_list) {
      this.filteredProducts = [...this.products_list]; // Restaurar la lista original
    }
    this.isFiltroValoracion = false;
    this.isFiltro15 = false;
    this.isFiltroOpinion = false;
  }

  onChangeMainProduct(product: Product) {
    this.selectedProduct = product;
    this.buttonChangeMainProduct.emit(product);
  }
}

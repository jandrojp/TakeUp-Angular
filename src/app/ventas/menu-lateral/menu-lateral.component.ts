import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})

export class MenuLateralComponent {
  
  @Output() buttonChangeMainProduct = new EventEmitter<string>();
  
  @Input() products_list?: {
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
  }[];

  filteredProducts: {
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
  }[] = [];

  selectedProduct?: string;
  isFiltroValoracion!: boolean;
  isFiltro15?: boolean;
  isFiltroOpinion?: boolean;



  ngOnInit() {
    if (this.products_list) {
      this.filteredProducts = [...this.products_list]; 
    }
  }

  botonFiltro15() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(product => product.price > 15);
      this.isFiltroValoracion = false;
      this.isFiltro15 = true;
      this.isFiltroOpinion = false;
    }
  }

  botonFiltroValoracion() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(product => product.rating >= 4.5);
      this.isFiltroValoracion = true;
      this.isFiltro15 = false;
      this.isFiltroOpinion = false;
    }
  }

  botonFiltroOpinion() {
    if (this.products_list) {
      this.filteredProducts = this.products_list.filter(product => product.reviews && product.reviews.length > 0);
      this.isFiltroValoracion = false;
      this.isFiltro15 = false;
      this.isFiltroOpinion = true;
    }
  }
  
  borrarFiltro() {
    this.ngOnInit();
    this.isFiltroValoracion = false;
    this.isFiltro15 = false;
    this.isFiltroOpinion = false;
  }

  onChangeMainProduct(productName: string) {
    this.selectedProduct = productName;
    this.buttonChangeMainProduct.emit(productName);
  }
  
}
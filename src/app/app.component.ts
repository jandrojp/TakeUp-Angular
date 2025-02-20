import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ajorge_takeup';

  products: Product[] = [
    {
      image: 'colombia.png',
      product: 'Café de Colombia',
      price: 16,
      currency: '€',
      rating: 2.8,
      description:
        'Un café suave y aromático cultivado en las montañas colombianas, conocido por su sabor balanceado.',
      similarProducts: [
        {
          image: 'etiopia.png',
          product: 'Café Etiopía',
          price: 12,
          currency: '€',
          rating: 4.3,
          description:
            'Café de origen etíope con sabores frutales y una acidez vibrante. Ideal para los amantes del café con carácter único.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
        {
          image: 'kenia.png',
          product: 'Café Kenia AA',
          price: 18,
          currency: '€',
          rating: 4.5,
          description:
            'Café de Kenia con cuerpo medio y notas de frutas tropicales. Una de las variedades más apreciadas por su complejidad.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
        {
          image: 'guatemala.png',
          product: 'Café de Guatemala',
          price: 13,
          currency: '€',
          rating: 4.6,
          description:
            'Café con cuerpo robusto y notas a chocolate oscuro, ideal para quienes buscan una taza intensa.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
      ],
      reviews: [
        {
          image: 'user1.png',
          name: 'Juan Valdez',
          rating: 5,
          opinion:
            'El mejor café que he probado, con un sabor perfectamente equilibrado y una textura suave.',
          date: 'Hace 2 días, 2023',
        },
        {
          image: 'user3.png',
          name: 'Carmen Rodríguez',
          rating: 4,
          opinion:
            'Muy buen café, aunque prefiero un poco más de acidez en mi taza. Aún así, altamente recomendable.',
          date: 'La semana pasada, 2023',
        },
      ],
      favourite: false,
    },
    {
      image: 'etiopia.png',
      product: 'Café Etiopía',
      price: 12,
      currency: '€',
      rating: 4,
      description:
        'Café de origen etíope con sabores frutales y una acidez vibrante. Ideal para los amantes del café con carácter único.',
      similarProducts: [
        {
          image: 'colombia.png',
          product: 'Café de Colombia',
          price: 16,
          currency: '€',
          rating: 4.8,
          description:
            'Un café suave y aromático cultivado en las montañas colombianas, conocido por su sabor balanceado y notas dulces.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
        {
          image: 'kenia.png',
          product: 'Café Kenia AA',
          price: 18,
          currency: '€',
          rating: 4.5,
          description:
            'Café de Kenia con cuerpo medio y notas de frutas tropicales. Una de las variedades más apreciadas por su complejidad.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
        {
          image: 'guatemala.png',
          product: 'Café de Guatemala',
          price: 13,
          currency: '€',
          rating: 4.6,
          description:
            'Café con cuerpo robusto y notas a chocolate oscuro, ideal para quienes buscan una taza intensa.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
      ],
      reviews: [
        {
          image: 'user1.png',
          name: 'Pablo Escobar',
          rating: 5,
          opinion:
            'Un sabor único, con una acidez agradable que perdura en el paladar. Excelente calidad.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: 'user3.png',
          name: 'María Álvarez',
          rating: 3,
          opinion:
            'Me esperaba un sabor más fuerte, pero es un buen café para el día a día.',
          date: 'Hace 3 días, 2023',
        },
      ],
      favourite: false,
    },
    {
      image: 'kenia.png',
      product: 'Café Kenia AA',
      price: 18,
      currency: '€',
      rating: 4.5,
      description:
        'Café de Kenia con cuerpo medio y notas de frutas tropicales. Una de las variedades más apreciadas por su complejidad.',
      similarProducts: [
        {
          image: 'etiopia.png',
          product: 'Café Etiopía',
          price: 12,
          currency: '€',
          rating: 4.3,
          description:
            'Café de origen etíope con sabores frutales y una acidez vibrante. Ideal para los amantes del café con carácter único.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
        {
          image: 'colombia.png',
          product: 'Café de Colombia',
          price: 16,
          currency: '€',
          rating: 4.8,
          description:
            'Un café suave y aromático cultivado en las montañas colombianas, conocido por su sabor balanceado y notas dulces.',
          similarProducts: [],
          reviews: [],
          favourite: false,
        },
      ],
      reviews: [
        {
          image: 'user2.png',
          name: 'Stan Smith',
          rating: 1,
          opinion:
            'Demasiado ácido para mi gusto. No es lo que buscaba en un café.',
          date: 'Ayer por la tarde, 2023',
        },
        {
          image: 'user3.png',
          name: 'Randy Watson',
          rating: 5,
          opinion:
            'Increíble. La combinación de cuerpo y sabor es perfecta para las mañanas.',
          date: 'primer día, 2023',
        },
      ],
      favourite: false,
    },
    {
      image: 'guatemala.png',
      product: 'Café de Guatemala',
      price: 13,
      currency: '€',
      rating: 3.2,
      description:
        'Café con cuerpo robusto y notas a chocolate oscuro, ideal para quienes buscan una taza intensa.',
      similarProducts: [],
      reviews: [],
      favourite: false,
    },
  ];

  mainProduct = this.products[0];
  filteredProducts = [...this.products];
  isModalOpen = false;
  modalProduct: {
    image: string;
    product: string;
    price: number;
    rating: number;
    description: string;
  } | null = null;

  changeMainProduct(nameMainProduct: string) {
    const newMainProduct = this.products.find(
      (product) => product.product === nameMainProduct
    );
    if (newMainProduct) {
      this.mainProduct = newMainProduct;
    }
  }

  deleteMainProduct(nameDeleteProduct: string) {
    this.products = this.products.filter(
      (product) => product.product !== nameDeleteProduct
    );
    this.filteredProducts = this.products.filter(
      (product) => product.product !== nameDeleteProduct
    );
  }

  openModal(nameModal: string) {
    const foundProduct = this.products.find(
      (product) => product.product === nameModal
    );

    this.modalProduct = foundProduct
      ? {
          image: foundProduct.image,
          product: foundProduct.product,
          price: foundProduct.price,
          rating: foundProduct.rating,
          description: foundProduct.description,
        }
      : null;

    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

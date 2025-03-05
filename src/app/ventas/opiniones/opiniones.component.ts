import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss']
})
export class OpinionesComponent {

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
  };

}

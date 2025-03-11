import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss'],
})
export class OpinionesComponent {
  @Input() main_product: Product | undefined | null;
}

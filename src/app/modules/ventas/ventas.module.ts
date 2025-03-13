import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MainProductComponent } from './main-product/main-product.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { ModalComponent } from './modal/modal.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FormularioAnyadirComponent } from './formulario-anyadir/formulario-anyadir.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuLateralComponent,
    MainProductComponent,
    SimilarProductsComponent,
    OpinionesComponent,
    ModalComponent,
    StarRatingComponent,
    MainComponentComponent,
    FormularioAnyadirComponent,
  ],
  imports: [CommonModule, VentasRoutingModule, ReactiveFormsModule],
  exports: [MainComponentComponent],
})
export class VentasModule {}

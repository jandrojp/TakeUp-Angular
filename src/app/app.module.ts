import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MainProductComponent } from './main-product/main-product.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { ModalComponent } from './modal/modal.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    MenuLateralComponent,
    MainProductComponent,
    SimilarProductsComponent,
    OpinionesComponent,
    ModalComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

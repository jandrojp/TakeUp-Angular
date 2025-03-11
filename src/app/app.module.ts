import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasModule } from './modules/ventas/ventas.module';
import { MarketingModule } from './modules/marketing/marketing.module';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { httpInterceptorProviders } from './services/index';
import { HttpClientModule } from '@angular/common/http';
import { GestionCarritoModule } from './modules/gestion-carrito/gestion-carrito.module';

@NgModule({
  declarations: [AppComponent, BarraNavegacionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VentasModule,
    MarketingModule,
    GestionCarritoModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

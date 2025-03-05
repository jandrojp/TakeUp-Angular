import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';
import { MarketingModule } from './marketing/marketing.module';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';

@NgModule({
  declarations: [AppComponent, BarraNavegacionComponent],
  imports: [BrowserModule, AppRoutingModule, VentasModule, MarketingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

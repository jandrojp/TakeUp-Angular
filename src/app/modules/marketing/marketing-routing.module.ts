import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: NosotrosComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule {}

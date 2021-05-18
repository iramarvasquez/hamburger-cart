import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: InterfaceComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'carrito', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

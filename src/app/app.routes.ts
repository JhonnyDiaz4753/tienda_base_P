import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { Search } from './search/search';
import { Login } from './login/login';
import { CreateAccount } from './create-account/create-account';
import { CartPage } from './cart-page/cart-page';


export const routes: Routes = [
    { path: '', component: Home },
  { path: 'buscar', component: Search },
  { path: 'comprar', component: Shop },
  {path: 'registro', component: App},
  {path: 'login', component: Login},
  {path: 'crear-cuenta', component: CreateAccount},
  {path: 'MiCarrito', component: CartPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
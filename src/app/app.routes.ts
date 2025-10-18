import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { Search } from './search/search';


export const routes: Routes = [
    { path: '', component: Home },
  { path: 'buscar', component: Search },
  { path: 'comprar', component: Shop },
  {path: 'registro', component: App}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
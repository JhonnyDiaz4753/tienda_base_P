import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-cart-page',
  imports: [Navbar, Footer],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {

}

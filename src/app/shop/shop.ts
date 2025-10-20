import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';
@Component({
  selector: 'app-shop',
  imports: [Navbar, Footer],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {

}

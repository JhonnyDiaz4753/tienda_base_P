import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-login',
  imports: [Navbar, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}

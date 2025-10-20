import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-create-account',
  imports: [Navbar, Footer],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {

}

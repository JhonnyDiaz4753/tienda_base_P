import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-search',
  imports: [Navbar, Footer],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  selectedSize: string | null = null;

  selectSize(size: string): void {
    if (this.selectedSize === size) {
      this.selectedSize = null; // Deseleccionar si ya está seleccionado
    } else {
      this.selectedSize = size; // Seleccionar nuevo
    }
  }

  isSelected(size: string): boolean {
    return this.selectedSize === size;
  }
}

import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = false;
  screenLarge = false;

  onResize() {
    if (typeof window !== 'undefined') {
      this.screenLarge = window.innerWidth >= 1024;
      if (this.screenLarge) {
        this.isMenuOpen = false;
      }
    }
  }

  ngOnInit() {
    this.onResize();
  }
}


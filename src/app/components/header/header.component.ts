import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  


  toggleMenu() {
    const menu = document.getElementById('navbar-dropdown');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
  
}

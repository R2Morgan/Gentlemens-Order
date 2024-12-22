import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // DOM properties
  lastScrollTop = 0;

  // DOM functionality

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const scrollThreshold = 1000;

    if (currentScroll > scrollThreshold) {
      if (currentScroll > this.lastScrollTop) {
        navbar.classList.add('navbar-hidden'); // Add class to hide navbar
      } else {
        navbar.classList.remove('navbar-hidden'); // Remove class to show navbar
      }
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
  }
}

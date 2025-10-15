import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  lastScrollTop = 0;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const scrollThreshold = 100;

    if (currentScroll > scrollThreshold) {
      if (currentScroll > this.lastScrollTop) {
        navbar.classList.add('navbar-hidden'); // Add class to hide navbar
      } else {
        navbar.classList.remove('navbar-hidden'); // Remove class to show navbar
      }
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative values
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.mobile-menu');
    const toggle = document.querySelector('.menu-toggle');

    // If clicked outside the menu and hamburger → close it
    if (
      this.menuOpen &&
      menu &&
      toggle &&
      !menu.contains(target) &&
      !toggle.contains(target)
    ) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

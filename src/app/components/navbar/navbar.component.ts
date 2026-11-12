import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly mobileMenuOpen = signal<boolean>(false);
  protected readonly scrolled = signal<boolean>(false);

  protected readonly navItems = [
    { path: '/', label: 'HOME', badge: null, exact: true },
    { path: '/about', label: 'ABOUT', badge: null, exact: false },
    { path: '/services', label: 'SERVICES', badge: '04', exact: false },
    { path: '/projects', label: 'PROJECTS', badge: null, exact: false },
    { path: '/news', label: 'NEWS', badge: null, exact: false },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }
}

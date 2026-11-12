import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly activeSection = signal<string>('home');
  protected readonly mobileMenuOpen = signal<boolean>(false);
  protected readonly scrolled = signal<boolean>(false);

  protected readonly navItems = [
    { id: 'home', label: 'HOME', badge: null },
    { id: 'about', label: 'ABOUT', badge: null },
    { id: 'services', label: 'SERVICES', badge: '04' },
    { id: 'projects', label: 'PROJECTS', badge: null },
    { id: 'news', label: 'NEWS', badge: null },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);

    const sections = ['home', 'about', 'services', 'projects', 'news', 'estimate'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          this.activeSection.set(id === 'estimate' ? 'home' : id);
          break;
        }
      }
    }
  }

  protected scrollTo(id: string): void {
    this.activeSection.set(id === 'estimate' ? this.activeSection() : id);
    this.mobileMenuOpen.set(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  protected readonly stats = [
    { value: 'EST.', label: '1998', emphasisFirst: true },
    { value: '340+', label: 'PROJECTS DELIVERED', emphasisFirst: true },
    { value: '1.2M', label: 'SQ FT BUILT', emphasisFirst: true },
    { value: 'ISO', label: '9001 · 45001 CERTIFIED', emphasisFirst: true },
  ];

  protected scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


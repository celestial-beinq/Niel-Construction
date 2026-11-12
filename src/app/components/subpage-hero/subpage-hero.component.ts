import { Component, input } from '@angular/core';

@Component({
  selector: 'app-subpage-hero',
  standalone: true,
  templateUrl: './subpage-hero.component.html',
  styleUrl: './subpage-hero.component.css',
})
export class SubpageHeroComponent {
  readonly eyebrow = input.required<string>();
  readonly titleMuted = input.required<string>();
  readonly titleSolid = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly metaRight = input<string>('NIEL CONSTRUCTION // EST. 1998');
}


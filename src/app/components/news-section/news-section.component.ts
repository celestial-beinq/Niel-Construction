import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.css',
})
export class NewsSectionComponent {
  protected readonly dispatches = [
    {
      date: 'OCT 2026',
      category: 'MILESTONE',
      title: 'NIEL Completes Structural Topping-Out on Northport Logistics Phase II',
      excerpt:
        '420,000 sq ft of high-tolerance precast tilt-up completed 19 days ahead of baseline schedule with zero recordable incidents.',
      readTime: '3 MIN READ',
    },
    {
      date: 'SEP 2026',
      category: 'SAFETY',
      title: 'Recertified for ISO 45001 Occupational Health & Safety Standards',
      excerpt:
        'Annual independent audit confirms a 0.42 EMR across 34 active commercial and industrial sites nationwide.',
      readTime: '2 MIN READ',
    },
    {
      date: 'AUG 2026',
      category: 'INNOVATION',
      title: 'How Real-Time BIM Field Telemetry Eliminates Change-Order Surprises',
      excerpt:
        'Inside our pre-construction clash detection workflow that saved clients $4.8M in rework over the past 12 months.',
      readTime: '4 MIN READ',
    },
  ];
}


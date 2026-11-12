import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  protected readonly pillars = [
    {
      index: '01',
      title: 'Pre-Construction Rigor',
      metric: '99.2% Schedule Adherence',
      description:
        'BIM clash detection, structural value engineering, and early-trade procurement before a single footing is poured.',
    },
    {
      index: '02',
      title: 'Transparent Cost Control',
      metric: 'Open-Book Accounting',
      description:
        'Real-time cost tracking, GMP contracts, and milestone-verified draws so budgets stay locked from kickoff to handover.',
    },
    {
      index: '03',
      title: 'Zero-Incident Safety',
      metric: '0.42 EMR Rating',
      description:
        'ISO 45001 certified field protocols, daily site briefings, and dedicated safety officers across every active job site.',
    },
  ];

  protected readonly metrics = [
    { value: '28', unit: 'YRS', label: 'Field Leadership' },
    { value: '98%', unit: '', label: 'On-Time Handover' },
    { value: '$1.4B', unit: '', label: 'Completed Volume' },
  ];
}


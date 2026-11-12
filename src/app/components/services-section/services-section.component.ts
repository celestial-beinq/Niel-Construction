import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
  protected readonly services = [
    {
      index: '01',
      tag: 'EXECUTION',
      title: 'General Contracting',
      description:
        'Full-scope field management, self-performed concrete and structural work, and vetted subcontractor coordination under a single GMP contract.',
      deliverables: ['GMP & Lump-Sum Delivery', 'Dedicated Site Superintendent', 'Weekly Milestone Reporting'],
    },
    {
      index: '02',
      tag: 'INTEGRATED',
      title: 'Design-Build',
      description:
        'Unified architectural, structural, and construction leadership that compresses project timelines by up to 30% with zero finger-pointing.',
      deliverables: ['Single-Source Accountability', 'Concurrent Design & Permitting', 'Fixed-Price Certainty'],
    },
    {
      index: '03',
      tag: 'PLANNING',
      title: 'Pre-Construction',
      description:
        'Early-stage feasibility, 3D BIM clash detection, constructability reviews, and line-item cost modeling before mobilization.',
      deliverables: ['BIM / VDC Coordination', 'Value Engineering Audits', 'Long-Lead Procurement'],
    },
    {
      index: '04',
      tag: 'HEAVY CIVIL',
      title: 'Industrial & Infrastructure',
      description:
        'High-bay logistics hubs, cleanrooms, tilt-up facilities, and heavy structural foundations engineered for continuous operation.',
      deliverables: ['High-Tolerance Slab Systems', 'MEP Heavy Integration', 'ISO 45001 Safety Compliance'],
    },
  ];

  protected scrollToEstimate(): void {
    const el = document.getElementById('estimate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


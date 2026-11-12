import { Component } from '@angular/core';

interface BuildStep {
  label: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-we-build',
  standalone: true,
  templateUrl: './how-we-build.component.html',
  styleUrl: './how-we-build.component.css',
})
export class HowWeBuildComponent {
  protected readonly steps: BuildStep[] = [
    {
      label: '01 — PLAN',
      title: 'Scope & estimate',
      description:
        'Site review, budget and a fixed schedule before anything is signed.',
    },
    {
      label: '02 — DESIGN',
      title: 'Engineer & permit',
      description:
        'Drawings, value engineering and permits handled in-house.',
    },
    {
      label: '03 — BUILD',
      title: 'Construct & report',
      description:
        'Weekly cost, quality and safety reports from one project lead.',
    },
    {
      label: '04 — HANDOVER',
      title: 'Commission & support',
      description:
        'Snag-free handover with a two-year workmanship warranty.',
    },
  ];
}


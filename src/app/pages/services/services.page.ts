import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    FaqSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './services.page.html',
  styleUrl: './services.page.css',
})
export class ServicesPage {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly services = inject(NielDataService).services;

  protected readonly stages = [
    {
      code: '01 / PLAN',
      title: 'Scope & estimate',
      description:
        'Site review, budget and a fixed schedule before anything is signed.',
    },
    {
      code: '02 / DESIGN',
      title: 'Engineer & permit',
      description:
        'Drawings, value engineering and permits handled in-house.',
    },
    {
      code: '03 / BUILD',
      title: 'Construct & report',
      description:
        'Weekly cost, quality and safety reports from one project lead.',
    },
    {
      code: '04 / HANDOVER',
      title: 'Commission & support',
      description:
        'Snag-free handover with a two-year workmanship warranty.',
    },
  ];

  protected scrollToEstimate(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' });
  }
}

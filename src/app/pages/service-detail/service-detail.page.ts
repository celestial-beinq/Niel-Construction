import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './service-detail.page.html',
  styleUrl: './service-detail.page.css',
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(NielDataService);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly service = computed(
    () =>
      this.data.services.find((s) => s.slug === this.slug()) ??
      this.data.services[0],
  );

  protected readonly relatedProjects = this.data.projects.slice(0, 3);

  protected readonly includedItems = [
    {
      num: '01',
      title: 'Site management',
      desc: 'A full-time superintendent and site team running logistics, access, daily coordination and close-out.',
    },
    {
      num: '02',
      title: 'Trade procurement',
      desc: 'Competitive bids from vetted subcontractors, levelled line by line and awarded on value, not just price.',
    },
    {
      num: '03',
      title: 'Quality control',
      desc: 'Inspection and test plans for every trade, mock-ups for critical details and documented sign-offs.',
    },
    {
      num: '04',
      title: 'Logistics & deliveries',
      desc: 'Crane, hoist and laydown planning with just-in-time deliveries to keep tight urban sites moving.',
    },
    {
      num: '05',
      title: 'Weekly reporting',
      desc: 'One report every Friday covering cost, schedule, quality and safety, with risks flagged early.',
    },
    {
      num: '06',
      title: 'Single point of contact',
      desc: 'One project director accountable for the whole contract, reachable directly from day one to handover.',
    },
  ];

  protected scrollToEstimate(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' });
  }
}

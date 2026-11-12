import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [NavbarComponent, EstimateCtaSectionComponent, FooterComponent],
  templateUrl: './project-detail.page.html',
  styleUrl: './project-detail.page.css',
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(NielDataService);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly project = computed(
    () =>
      this.data.projects.find((p) => p.slug === this.slug()) ??
      this.data.projects[0],
  );

  protected readonly projectIndex = computed(() => {
    const idx = this.data.projects.findIndex(
      (p) => p.slug === this.project().slug,
    );
    return (idx >= 0 ? idx + 1 : 1).toString().padStart(2, '0');
  });

  protected readonly bentoGallery = computed(() => {
    const prj = this.project();
    const fallbacks = [
      'images/hero-construction.jpg',
      'images/service-contracting.jpg',
      'images/about-site-overhead.jpg',
      prj.image,
    ];
    const combined = [...prj.gallery, ...fallbacks];
    return combined.slice(0, 4);
  });

  protected splitMetric(raw: string): { num: string; unit: string } {
    const parts = raw.trim().split(/\s+/);
    if (parts.length <= 1) {
      return { num: raw, unit: '' };
    }
    return { num: parts[0], unit: ' ' + parts.slice(1).join(' ') };
  }

  protected scrollToEstimate(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' });
  }
}

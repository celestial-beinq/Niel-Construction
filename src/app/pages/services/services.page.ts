import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
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
    SubpageHeroComponent,
    FaqSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-subpage-hero
        eyebrow="04 CORE SERVICES"
        titleMuted="Four disciplines,"
        titleSolid="built for certainty."
        subtitle="Explore how NIEL Construction structures pre-construction, design-build, general contracting, and heavy industrial delivery."
        metaRight="04 SERVICES // ISO 9001 CERTIFIED"
      />

      <section class="services-catalog">
        <div class="container">
          <div class="catalog-grid">
            @for (service of services; track service.slug) {
              <article
                class="catalog-card"
                [attr.data-aos]="$index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left'"
                [attr.data-aos-delay]="$index * 90"
              >
                <div class="catalog-card__top">
                  <span class="catalog-card__index">{{ service.index }}</span>
                  <span class="catalog-card__tag">{{ service.tag }}</span>
                </div>
                <h2 class="catalog-card__title">{{ service.title }}</h2>
                <p class="catalog-card__desc">{{ service.fullDesc }}</p>

                <div class="catalog-card__meta">
                  <div>
                    <span class="meta-label">IDEAL FOR</span>
                    <span class="meta-val">{{ service.idealFor }}</span>
                  </div>
                  <div>
                    <span class="meta-label">TYPICAL TIMELINE</span>
                    <span class="meta-val">{{ service.typicalTimeline }}</span>
                  </div>
                </div>

                <a class="btn-split btn-split--dark catalog-card__cta" [routerLink]="['/services', service.slug]">
                  <span>VIEW SERVICE SPEC</span>
                  <span class="btn-split__arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </a>
              </article>
            }
          </div>
        </div>
      </section>

      <app-faq-section />
      <app-estimate-cta-section />
    </main>
    <app-footer />
  `,
  styles: `
    .services-catalog {
      background: var(--niel-bg-light);
      color: var(--niel-text-dark);
      padding-block: clamp(4.5rem, 8vw, 6.5rem);
      border-bottom: 1px solid var(--niel-border-light);
    }

    .catalog-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .catalog-card {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      background: #ffffff;
      border: 1px solid var(--niel-border-light);
      border-radius: var(--radius-lg);
    }

    .catalog-card__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .catalog-card__index {
      padding: 0.25rem 0.5625rem;
      border-radius: var(--radius-sm);
      background: var(--niel-text-dark);
      color: #ffffff;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
    }

    .catalog-card__tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.1em;
      color: var(--niel-accent);
      font-weight: 600;
    }

    .catalog-card__title {
      margin: 0 0 0.75rem;
      font-size: 1.625rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .catalog-card__desc {
      margin: 0 0 1.5rem;
      font-size: 0.9375rem;
      line-height: 1.62;
      color: var(--niel-text-muted-light);
    }

    .catalog-card__meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 1.125rem 0;
      margin-bottom: 1.5rem;
      border-top: 1px solid var(--niel-border-light);
      border-bottom: 1px solid var(--niel-border-light);
    }

    .meta-label {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.625rem;
      letter-spacing: 0.08em;
      color: var(--niel-text-muted-light);
      margin-bottom: 0.25rem;
    }

    .meta-val {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--niel-text-dark);
    }

    .catalog-card__cta {
      margin-top: auto;
      width: 100%;
    }

    @media (max-width: 860px) {
      .catalog-grid,
      .catalog-card__meta {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ServicesPage {
  protected readonly services = inject(NielDataService).services;
}


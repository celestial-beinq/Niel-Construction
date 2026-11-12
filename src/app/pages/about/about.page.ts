import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NavbarComponent,
    SubpageHeroComponent,
    AboutSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-subpage-hero
        eyebrow="ABOUT NIEL CONSTRUCTION"
        titleMuted="Nearly three decades,"
        titleSolid="zero shortcuts."
        subtitle="Founded in 1998, NIEL Construction delivers institutional-grade general contracting, design-build, and pre-construction with open-book accountability."
        metaRight="EST. 1998 · 340+ BUILDS"
      />

      <app-about-section />

      <!-- Pinned Company Timeline -->
      <section class="timeline-section">
        <div class="container timeline-grid">
          <div class="timeline-sticky" data-aos="fade-right">
            <div class="status-pill status-pill--dark">
              <span class="status-dot" aria-hidden="true"></span>
              <span>COMPANY TIMELINE</span>
            </div>
            <h2 class="timeline-title">
              <span class="timeline-title__muted">From 1998 to 2026,</span>
              <span class="timeline-title__solid">steady structural growth.</span>
            </h2>
            <p class="timeline-copy">
              Every milestone reflects our commitment to self-performed quality,
              transparent cost control, and zero-incident job sites.
            </p>
          </div>

          <div class="timeline-list">
            @for (item of timeline; track item.year) {
              <article
                class="timeline-card"
                [attr.data-aos]="$index % 2 === 0 ? 'fade-up-left' : 'zoom-in-left'"
                [attr.data-aos-delay]="$index * 80"
              >
                <div class="timeline-card__top">
                  <span class="timeline-card__year">{{ item.year }}</span>
                  <span class="timeline-card__metric">{{ item.metric }}</span>
                </div>
                <h3 class="timeline-card__title">{{ item.title }}</h3>
                <p class="timeline-card__desc">{{ item.description }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <app-estimate-cta-section />
    </main>
    <app-footer />
  `,
  styles: `
    .timeline-section {
      background-color: var(--niel-bg-dark);
      color: #ffffff;
      padding-block: clamp(4.5rem, 8vw, 7rem);
      border-top: 1px solid var(--niel-border-dark);
    }

    .timeline-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.2fr;
      gap: clamp(2.5rem, 5vw, 4.5rem);
      align-items: start;
    }

    .timeline-sticky {
      position: sticky;
      top: 7.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .timeline-title {
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: clamp(2rem, 3.8vw, 3rem);
      font-weight: 600;
      line-height: 1.06;
      letter-spacing: -0.03em;
    }

    .timeline-title__muted {
      color: rgba(255, 255, 255, 0.56);
    }

    .timeline-title__solid {
      color: #ffffff;
    }

    .timeline-copy {
      margin: 0;
      max-width: 400px;
      font-size: 0.96875rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
    }

    .timeline-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .timeline-card {
      padding: 1.75rem;
      border-radius: var(--radius-lg);
      background: var(--niel-surface-dark);
      border: 1px solid var(--niel-border-dark);
    }

    .timeline-card__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.875rem;
    }

    .timeline-card__year {
      font-family: var(--font-mono);
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
    }

    .timeline-card__metric {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.08em;
      color: var(--niel-accent);
      font-weight: 600;
    }

    .timeline-card__title {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .timeline-card__desc {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
    }

    @media (max-width: 920px) {
      .timeline-grid {
        grid-template-columns: 1fr;
      }

      .timeline-sticky {
        position: static;
      }
    }
  `,
})
export class AboutPage {
  protected readonly timeline = inject(NielDataService).timeline;
}


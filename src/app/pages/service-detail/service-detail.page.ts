import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    SubpageHeroComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    @if (service(); as svc) {
      <main>
        <app-subpage-hero
          [eyebrow]="'SERVICE ' + svc.index + ' // ' + svc.tag"
          [titleMuted]="svc.title"
          titleSolid="execution specification."
          [subtitle]="svc.fullDesc"
          [metaRight]="'TIMELINE: ' + svc.typicalTimeline"
        />

        <section class="detail-section">
          <div class="container detail-grid">
            <div class="detail-main">
              <h2 class="detail-heading" data-aos="fade-right">Execution Workflow</h2>
              <div class="steps-stack">
                @for (step of svc.processSteps; track step.step) {
                  <article
                    class="step-card"
                    [attr.data-aos]="$index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
                    [attr.data-aos-delay]="$index * 80"
                  >
                    <span class="step-card__num">{{ step.step }}</span>
                    <div>
                      <h3 class="step-card__title">{{ step.title }}</h3>
                      <p class="step-card__detail">{{ step.detail }}</p>
                    </div>
                  </article>
                }
              </div>

              <h2 class="detail-heading detail-heading--spaced" data-aos="fade-right">Included Deliverables</h2>
              <ul class="deliverables-grid">
                @for (item of svc.deliverables; track item) {
                  <li data-aos="zoom-in" [attr.data-aos-delay]="$index * 50">
                    <span class="deliverable-dot" aria-hidden="true"></span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>

            <aside class="sticky-spec" data-aos="flip-right">
              <div class="spec-label">SERVICE SPECIFICATION</div>
              <div class="spec-row">
                <span>DISCIPLINE</span>
                <strong>{{ svc.title }}</strong>
              </div>
              <div class="spec-row">
                <span>CONTRACT MODEL</span>
                <strong>{{ svc.contractModel }}</strong>
              </div>
              <div class="spec-row">
                <span>TYPICAL DURATION</span>
                <strong>{{ svc.typicalTimeline }}</strong>
              </div>
              <div class="spec-row">
                <span>IDEAL SECTORS</span>
                <strong>{{ svc.idealFor }}</strong>
              </div>

              <a class="btn-split btn-split--accent spec-btn" routerLink="/contact">
                <span>REQUEST {{ svc.tag }} QUOTE</span>
                <span class="btn-split__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </aside>
          </div>
        </section>

        <app-estimate-cta-section />
      </main>
    }
    <app-footer />
  `,
  styles: `
    .detail-section {
      background: #ffffff;
      color: var(--niel-text-dark);
      padding-block: clamp(4rem, 7vw, 6rem);
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 1.3fr 0.8fr;
      gap: clamp(2rem, 5vw, 4rem);
      align-items: start;
    }

    .detail-heading {
      margin: 0 0 1.5rem;
      font-size: 1.75rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .detail-heading--spaced {
      margin-top: 3rem;
    }

    .steps-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .step-card {
      display: flex;
      gap: 1.25rem;
      padding: 1.5rem;
      border-radius: var(--radius-lg);
      background: var(--niel-bg-light);
      border: 1px solid var(--niel-border-light);
    }

    .step-card__num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: var(--radius-sm);
      background: var(--niel-text-dark);
      color: #ffffff;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      flex-shrink: 0;
    }

    .step-card__title {
      margin: 0 0 0.375rem;
      font-size: 1.125rem;
      font-weight: 600;
    }

    .step-card__detail {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--niel-text-muted-light);
    }

    .deliverables-grid {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.875rem;
    }

    .deliverables-grid li {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      padding: 1rem 1.25rem;
      border-radius: var(--radius-md);
      border: 1px solid var(--niel-border-light);
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      font-weight: 500;
    }

    .deliverable-dot {
      width: 6px;
      height: 6px;
      border-radius: 1px;
      background: var(--niel-accent);
      flex-shrink: 0;
    }

    .sticky-spec {
      position: sticky;
      top: 7.5rem;
      padding: 1.75rem;
      border-radius: var(--radius-lg);
      background: var(--niel-bg-dark);
      color: #ffffff;
    }

    .spec-label {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.1em;
      color: var(--niel-accent);
      margin-bottom: 1.25rem;
    }

    .spec-row {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding-block: 0.875rem;
      border-top: 1px solid var(--niel-border-dark);
    }

    .spec-row span {
      font-family: var(--font-mono);
      font-size: 0.65625rem;
      letter-spacing: 0.08em;
      color: rgba(255, 255, 255, 0.54);
    }

    .spec-row strong {
      font-size: 0.9375rem;
      font-weight: 500;
    }

    .spec-btn {
      width: 100%;
      margin-top: 1.25rem;
    }

    @media (max-width: 900px) {
      .detail-grid,
      .deliverables-grid {
        grid-template-columns: 1fr;
      }

      .sticky-spec {
        position: static;
      }
    }
  `,
})
export class ServiceDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(NielDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly service = computed(
    () => this.data.getServiceBySlug(this.slug()) ?? this.data.services[0],
  );
}


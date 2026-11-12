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
  selector: 'app-project-detail-page',
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
    @if (project(); as prj) {
      <main>
        <app-subpage-hero
          [eyebrow]="prj.code + ' // ' + prj.category"
          [titleMuted]="prj.title"
          [titleSolid]="prj.location"
          [subtitle]="prj.summary"
          [metaRight]="'COMPLETED ' + prj.year"
        />

        <!-- Stats Band -->
        <section class="stats-band">
          <div class="container stats-band__grid">
            <div class="stat-cell">
              <span class="stat-cell__label">TOTAL AREA</span>
              <strong class="stat-cell__value">{{ prj.area }}</strong>
            </div>
            <div class="stat-cell">
              <span class="stat-cell__label">DURATION</span>
              <strong class="stat-cell__value">{{ prj.duration }}</strong>
            </div>
            <div class="stat-cell">
              <span class="stat-cell__label">CONTRACT VALUE</span>
              <strong class="stat-cell__value">{{ prj.value }}</strong>
            </div>
            <div class="stat-cell">
              <span class="stat-cell__label">DELIVERY</span>
              <strong class="stat-cell__value">{{ prj.year }} · ON SCHEDULE</strong>
            </div>
          </div>
        </section>

        <!-- Case Study Body + Sticky Detail Card -->
        <section class="case-study">
          <div class="container case-study__grid">
            <div class="case-study__content">
              <div class="case-study__hero-img-wrap">
                <img [src]="prj.image" [alt]="prj.title" class="case-study__hero-img" />
              </div>

              <div class="case-block">
                <span class="case-block__tag">01 // THE CHALLENGE</span>
                <h2>Site &amp; Structural Constraints</h2>
                <p>{{ prj.challenge }}</p>
              </div>

              <div class="case-block">
                <span class="case-block__tag">02 // NIEL SOLUTION</span>
                <h2>Engineering &amp; Sequencing</h2>
                <p>{{ prj.solution }}</p>
              </div>

              <div class="case-block">
                <span class="case-block__tag">03 // OUTCOME</span>
                <h2>Schedule &amp; Budget Performance</h2>
                <p>{{ prj.outcome }}</p>
              </div>

              <!-- Photo Gallery -->
              <div class="case-gallery">
                @for (img of prj.gallery; track $index) {
                  <img [src]="img" [alt]="prj.title + ' view ' + ($index + 1)" loading="lazy" />
                }
              </div>

              <!-- Client Quote -->
              <blockquote class="case-quote">
                <p>“{{ prj.clientQuote.quote }}”</p>
                <footer>
                  <strong>{{ prj.clientQuote.author }}</strong> — {{ prj.clientQuote.role }}
                </footer>
              </blockquote>
            </div>

            <aside class="sticky-project-card">
              <div class="spec-label">PROJECT DOSSIER</div>
              <div class="spec-row">
                <span>PROJECT CODE</span>
                <strong>{{ prj.code }}</strong>
              </div>
              <div class="spec-row">
                <span>CLIENT</span>
                <strong>{{ prj.client }}</strong>
              </div>
              <div class="spec-row">
                <span>SECTOR</span>
                <strong>{{ prj.category }}</strong>
              </div>
              <div class="spec-row">
                <span>CONTRACT TYPE</span>
                <strong>{{ prj.contractType }}</strong>
              </div>
              <div class="spec-row">
                <span>LOCATION</span>
                <strong>{{ prj.location }}</strong>
              </div>

              <a class="btn-split btn-split--accent spec-btn" routerLink="/contact">
                <span>START A SIMILAR BUILD</span>
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
    .stats-band {
      background: #12171c;
      border-bottom: 1px solid var(--niel-border-dark);
      color: #ffffff;
    }

    .stats-band__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      padding-block: 1.75rem;
    }

    .stat-cell__label {
      display: block;
      font-family: var(--font-mono);
      font-size: 0.65625rem;
      letter-spacing: 0.08em;
      color: rgba(255, 255, 255, 0.52);
      margin-bottom: 0.375rem;
    }

    .stat-cell__value {
      font-size: 1.125rem;
      font-weight: 600;
    }

    .case-study {
      background: #ffffff;
      color: var(--niel-text-dark);
      padding-block: clamp(4rem, 7vw, 6rem);
    }

    .case-study__grid {
      display: grid;
      grid-template-columns: 1.35fr 0.75fr;
      gap: clamp(2rem, 5vw, 4rem);
      align-items: start;
    }

    .case-study__hero-img-wrap {
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-bottom: 2.5rem;
      aspect-ratio: 16 / 9;
    }

    .case-study__hero-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .case-block {
      margin-bottom: 2.25rem;
    }

    .case-block__tag {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--niel-accent);
      margin-bottom: 0.5rem;
    }

    .case-block h2 {
      margin: 0 0 0.75rem;
      font-size: 1.625rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    .case-block p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.68;
      color: var(--niel-text-muted-light);
    }

    .case-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.875rem;
      margin-block: 2.5rem;
    }

    .case-gallery img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    .case-quote {
      margin: 0;
      padding: 1.75rem;
      border-radius: var(--radius-lg);
      background: var(--niel-bg-light);
      border-left: 3px solid var(--niel-accent);
    }

    .case-quote p {
      margin: 0 0 0.875rem;
      font-size: 1.0625rem;
      line-height: 1.6;
      font-weight: 500;
    }

    .case-quote footer {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--niel-text-muted-light);
    }

    .sticky-project-card {
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
      .stats-band__grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .case-study__grid {
        grid-template-columns: 1fr;
      }

      .sticky-project-card {
        position: static;
      }
    }

    @media (max-width: 560px) {
      .case-gallery {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ProjectDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(NielDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly project = computed(
    () => this.data.getProjectBySlug(this.slug()) ?? this.data.projects[0],
  );
}


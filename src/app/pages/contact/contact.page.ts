import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NavbarComponent,
    SubpageHeroComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-subpage-hero
        eyebrow="GET ESTIMATE &amp; SITE VISIT"
        titleMuted="Book a site walk,"
        titleSolid="lock your project budget."
        subtitle="Connect directly with Daniel Hayes and our pre-construction engineering desk for preliminary GMP pricing, BIM feasibility, or an on-site walk."
        metaRight="REPLIES IN ~1H · MON–SAT"
      />

      <app-estimate-cta-section />

      <section class="office-strip">
        <div class="container office-grid">
          <div class="office-card" data-aos="flip-left" data-aos-delay="0">
            <span class="office-card__tag">HEADQUARTERS</span>
            <h3>Victoria Island, Lagos</h3>
            <p>Plot 14 Adeola Odeku Street<br />Victoria Island, Lagos, Nigeria</p>
          </div>
          <div class="office-card" data-aos="zoom-in-up" data-aos-delay="100">
            <span class="office-card__tag">PRE-CONSTRUCTION DESK</span>
            <h3>Direct Dispatch</h3>
            <p>estimates&#64;nielconstruction.com<br />+234 809 555 0198</p>
          </div>
          <div class="office-card" data-aos="flip-right" data-aos-delay="200">
            <span class="office-card__tag">FIELD HOURS</span>
            <h3>Active Operations</h3>
            <p>Mon – Fri: 06:30 – 18:30<br />Sat: 08:00 – 14:00</p>
          </div>
        </div>
      </section>
    </main>
    <app-footer />
  `,
  styles: `
    .office-strip {
      background: var(--niel-bg-light);
      color: var(--niel-text-dark);
      padding-block: 4rem;
    }

    .office-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    .office-card {
      padding: 1.75rem;
      border-radius: var(--radius-lg);
      background: #ffffff;
      border: 1px solid var(--niel-border-light);
    }

    .office-card__tag {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--niel-accent);
    }

    .office-card h3 {
      margin: 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .office-card p {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.6;
      color: var(--niel-text-muted-light);
    }

    @media (max-width: 820px) {
      .office-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ContactPage {}


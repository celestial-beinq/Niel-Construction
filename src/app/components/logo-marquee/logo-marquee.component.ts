import { Component, inject } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  template: `
    <section class="marquee-band" aria-label="Trusted by leading developers">
      <div class="container marquee-label-row" data-aos="fade-down">
        <span class="marquee-label">TRUSTED BY LEADING DEVELOPERS</span>
      </div>
      <div class="container">
        <div class="marquee-viewport" data-aos="zoom-out" data-aos-delay="100">
          <div class="marquee-track">
            @for (logo of logos; track $index) {
              <div class="marquee-cell" [attr.data-style]="logo.style">
                <span>{{ logo.name }}</span>
              </div>
            }
            @for (logo of logos; track 'dup-' + $index) {
              <div class="marquee-cell" [attr.data-style]="logo.style" aria-hidden="true">
                <span>{{ logo.name }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .marquee-band {
      background: #ffffff;
      color: var(--niel-text-dark);
      padding-block: clamp(2.5rem, 4vw, 3.5rem) clamp(2rem, 3vw, 2.75rem);
      overflow: hidden;
    }

    .marquee-label-row {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .marquee-label {
      display: inline-block;
      padding: 0.4375rem 0.875rem;
      border-radius: var(--radius-sm);
      background: #f3f4f6;
      border: 1px solid #e7e9ec;
      font-family: var(--font-mono);
      font-size: 0.65625rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: #111827;
    }

    .marquee-viewport {
      overflow: hidden;
      border-top: 1px solid #eaecef;
      border-bottom: 1px solid #eaecef;
      mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: niel-marquee 30s linear infinite;
    }

    .marquee-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 215px;
      height: 82px;
      padding-inline: 2rem;
      border-right: 1px solid #eaecef;
      color: #9ca3af;
      font-size: 1.0625rem;
      user-select: none;
      transition: color 0.2s ease;
    }

    .marquee-cell:hover {
      color: #374151;
    }

    .marquee-cell[data-style='serif'] {
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-size: 1.25rem;
    }

    .marquee-cell[data-style='bold'] {
      font-weight: 700;
      letter-spacing: -0.04em;
    }

    .marquee-cell[data-style='mono'] {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
    }

    .marquee-cell[data-style='caps'] {
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.08em;
    }

    .marquee-cell[data-style='sans'] {
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    @keyframes niel-marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `,
})
export class LogoMarqueeComponent {
  protected readonly logos = inject(NielDataService).partnerLogos;
}

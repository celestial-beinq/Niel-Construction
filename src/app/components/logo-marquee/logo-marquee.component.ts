import { Component, inject } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  template: `
    <section class="marquee-band" aria-label="Trusted development partners">
      <div class="container marquee-label-row">
        <span class="marquee-label">TRUSTED BY INSTITUTIONAL DEVELOPERS &amp; ARCHITECTS</span>
      </div>
      <div class="marquee-viewport">
        <div class="marquee-track">
          @for (logo of logos; track $index) {
            <span class="marquee-item">
              <span class="marquee-dot" aria-hidden="true"></span>
              <span>{{ logo }}</span>
            </span>
          }
          @for (logo of logos; track 'dup-' + $index) {
            <span class="marquee-item" aria-hidden="true">
              <span class="marquee-dot"></span>
              <span>{{ logo }}</span>
            </span>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .marquee-band {
      background: #090d10;
      border-bottom: 1px solid var(--niel-border-dark);
      padding-block: 1.5rem;
      overflow: hidden;
    }

    .marquee-label-row {
      margin-bottom: 1rem;
    }

    .marquee-label {
      font-family: var(--font-mono);
      font-size: 0.65625rem;
      letter-spacing: 0.1em;
      color: rgba(255, 255, 255, 0.45);
    }

    .marquee-viewport {
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    }

    .marquee-track {
      display: flex;
      width: max-content;
      gap: 3rem;
      animation: niel-marquee 32s linear infinite;
    }

    .marquee-item {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      color: rgba(255, 255, 255, 0.72);
      white-space: nowrap;
    }

    .marquee-dot {
      width: 5px;
      height: 5px;
      border-radius: 1px;
      background: var(--niel-accent);
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


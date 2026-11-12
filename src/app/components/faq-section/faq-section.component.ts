import { Component, inject, signal } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  template: `
    <section class="faq-section">
      <div class="container faq-grid">
        <div class="faq-lead" data-aos="fade-right">
          <div class="status-pill status-pill--light">
            <span class="status-dot" aria-hidden="true"></span>
            <span>HELP &amp; SUPPORT</span>
          </div>

          <h2 class="faq-title">
            <span class="faq-title__solid">Questions, </span>
            <span class="faq-title__muted">answered.</span>
          </h2>

          <p class="faq-copy">
            Not answered here? Our estimating team replies within one business day.
          </p>

          <a href="tel:+2348095550198" class="faq-call-cta">
            <span class="faq-call-circle" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="faq-call-meta">
              <span class="faq-call-label">CALL US</span>
              <span class="faq-call-number">+234 809 555 0198</span>
            </span>
          </a>
        </div>

        <div class="faq-list" data-aos="fade-left">
          @for (item of faqs; track item.question; let idx = $index) {
            <div class="faq-item" [class.faq-item--open]="openIndex() === idx">
              <button
                type="button"
                class="faq-trigger"
                [attr.aria-expanded]="openIndex() === idx"
                (click)="toggle(idx)"
              >
                <span class="faq-question">{{ item.question }}</span>
                <span class="faq-plus" aria-hidden="true">
                  {{ openIndex() === idx ? '−' : '+' }}
                </span>
              </button>
              @if (openIndex() === idx) {
                <div class="faq-answer">
                  <p>{{ item.answer }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .faq-section {
      background-color: #ffffff;
      color: var(--niel-text-dark);
      padding-block: clamp(4.5rem, 8vw, 6.5rem);
      border-bottom: 1px solid var(--niel-border-light);
    }

    .faq-grid {
      display: grid;
      grid-template-columns: 0.85fr 1.25fr;
      gap: clamp(2.5rem, 6vw, 5.5rem);
      align-items: start;
    }

    .faq-lead {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.15rem;
    }

    .faq-title {
      margin: 0.15rem 0 0;
      font-size: clamp(2rem, 3.6vw, 2.85rem);
      font-weight: 600;
      line-height: 1.08;
      letter-spacing: -0.03em;
    }

    .faq-title__solid {
      color: var(--niel-text-dark);
    }

    .faq-title__muted {
      color: #8a929b;
    }

    .faq-copy {
      margin: 0;
      max-width: 340px;
      font-size: 0.9375rem;
      line-height: 1.55;
      color: var(--niel-text-muted-light);
    }

    .faq-call-cta {
      margin-top: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.9rem;
      text-decoration: none;
      color: var(--niel-text-dark);
      transition: opacity 0.2s ease;
    }

    .faq-call-cta:hover .faq-call-circle {
      background-color: var(--niel-accent-hover);
      transform: translateX(2px);
    }

    .faq-call-circle {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background-color: var(--niel-accent);
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .faq-call-meta {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .faq-call-label {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      color: #7b848e;
      text-transform: uppercase;
    }

    .faq-call-number {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      color: var(--niel-text-dark);
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #eceff3;
    }

    .faq-item {
      border-bottom: 1px solid #eceff3;
    }

    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
      padding: 1.35rem 0;
      background: transparent;
      border: none;
      text-align: left;
      color: var(--niel-text-dark);
    }

    .faq-question {
      flex: 1;
      font-size: 1.03125rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      line-height: 1.4;
    }

    .faq-plus {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f3f4f6;
      color: #5a646e;
      font-family: var(--font-mono);
      font-size: 1rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .faq-trigger:hover .faq-plus {
      background-color: #e6e9ee;
      color: var(--niel-text-dark);
    }

    .faq-item--open .faq-plus {
      background-color: var(--niel-text-dark);
      color: #ffffff;
    }

    .faq-answer {
      padding: 0 2.75rem 1.35rem 0;
    }

    .faq-answer p {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.65;
      color: var(--niel-text-muted-light);
    }

    @media (max-width: 900px) {
      .faq-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class FaqSectionComponent {
  protected readonly faqs = inject(NielDataService).faqs;
  protected readonly openIndex = signal<number | null>(null);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

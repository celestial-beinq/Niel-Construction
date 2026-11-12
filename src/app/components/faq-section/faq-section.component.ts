import { Component, inject, signal } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  template: `
    <section class="faq-section">
      <div class="container faq-grid">
        <div class="faq-lead">
          <div class="status-pill status-pill--light">
            <span class="status-dot" aria-hidden="true"></span>
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 class="section-title section-title--light">
            <span class="section-title__muted">Clear answers,</span>
            <span class="section-title__solid">before we mobilize.</span>
          </h2>
          <p class="faq-copy">
            Direct answers on GMP contracting, pre-construction estimating,
            bonding capacity, and regional coverage.
          </p>
        </div>

        <div class="faq-list">
          @for (item of faqs; track item.question; let idx = $index) {
            <div class="faq-item" [class.faq-item--open]="openIndex() === idx">
              <button
                type="button"
                class="faq-trigger"
                [attr.aria-expanded]="openIndex() === idx"
                (click)="toggle(idx)"
              >
                <span class="faq-index">0{{ idx + 1 }}</span>
                <span class="faq-question">{{ item.question }}</span>
                <span class="faq-plus" aria-hidden="true">{{ openIndex() === idx ? '−' : '+' }}</span>
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
      grid-template-columns: 0.9fr 1.2fr;
      gap: clamp(2rem, 5vw, 4.5rem);
      align-items: start;
    }

    .faq-lead {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .section-title {
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: clamp(2rem, 3.8vw, 3rem);
      font-weight: 600;
      line-height: 1.06;
      letter-spacing: -0.03em;
    }

    .section-title__muted {
      color: #7b848e;
    }

    .section-title__solid {
      color: var(--niel-text-dark);
    }

    .faq-copy {
      margin: 0;
      max-width: 400px;
      font-size: 0.96875rem;
      line-height: 1.6;
      color: var(--niel-text-muted-light);
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .faq-item {
      border: 1px solid var(--niel-border-light);
      border-radius: var(--radius-lg);
      background: var(--niel-bg-light);
      overflow: hidden;
      transition: border-color 0.2s ease, background-color 0.2s ease;
    }

    .faq-item--open {
      background: #ffffff;
      border-color: #c2c9d1;
    }

    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
      background: transparent;
      border: none;
      text-align: left;
      color: var(--niel-text-dark);
    }

    .faq-index {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--niel-accent);
      flex-shrink: 0;
    }

    .faq-question {
      flex: 1;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    .faq-plus {
      font-family: var(--font-mono);
      font-size: 1.25rem;
      color: var(--niel-text-muted-light);
      flex-shrink: 0;
    }

    .faq-answer {
      padding: 0 1.5rem 1.25rem 3.35rem;
    }

    .faq-answer p {
      margin: 0;
      font-size: 0.9375rem;
      line-height: 1.62;
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
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

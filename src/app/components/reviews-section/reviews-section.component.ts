import { Component, inject } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  template: `
    <section class="reviews-section">
      <div class="container">
        <div class="reviews-header" data-aos="fade-up">
          <div class="status-pill status-pill--dark">
            <span class="status-dot" aria-hidden="true"></span>
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 class="section-title section-title--dark">
            <span class="section-title__muted">Proven in the field,</span>
            <span class="section-title__solid">trusted by owners.</span>
          </h2>
        </div>

        <div class="reviews-grid">
          @for (review of reviews; track review.projectCode) {
            <article
              class="review-card"
              [attr.data-aos]="$index === 0 ? 'fade-right' : ($index === 1 ? 'zoom-in' : 'fade-left')"
              [attr.data-aos-delay]="$index * 100"
            >
              <div class="review-card__top">
                <span class="review-card__code">{{ review.projectCode }}</span>
                <span class="review-card__stars" aria-label="5 out of 5 stars">★★★★★</span>
              </div>
              <blockquote class="review-card__quote">“{{ review.quote }}”</blockquote>
              <div class="review-card__author">
                <div class="review-card__name">{{ review.author }}</div>
                <div class="review-card__role">{{ review.role }} · {{ review.company }}</div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .reviews-section {
      background-color: var(--niel-bg-dark);
      color: #ffffff;
      padding-block: clamp(4.5rem, 8vw, 6.5rem);
      border-top: 1px solid var(--niel-border-dark);
      border-bottom: 1px solid var(--niel-border-dark);
    }

    .reviews-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2.75rem;
    }

    .section-title {
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: clamp(2rem, 4.2vw, 3.25rem);
      font-weight: 600;
      line-height: 1.06;
      letter-spacing: -0.03em;
    }

    .section-title__muted {
      color: rgba(255, 255, 255, 0.56);
    }

    .section-title__solid {
      color: #ffffff;
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    .review-card {
      display: flex;
      flex-direction: column;
      padding: 1.75rem;
      border-radius: var(--radius-lg);
      background: var(--niel-surface-dark);
      border: 1px solid var(--niel-border-dark);
    }

    .review-card__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .review-card__code {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.08em;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-sm);
      background: rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.88);
    }

    .review-card__stars {
      color: var(--niel-accent);
      font-size: 0.8125rem;
      letter-spacing: 0.1em;
    }

    .review-card__quote {
      margin: 0 0 1.75rem;
      font-size: 0.96875rem;
      line-height: 1.62;
      color: rgba(255, 255, 255, 0.88);
    }

    .review-card__author {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid var(--niel-border-dark);
    }

    .review-card__name {
      font-weight: 600;
      font-size: 0.9375rem;
      color: #ffffff;
    }

    .review-card__role {
      margin-top: 0.1875rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      letter-spacing: 0.05em;
      color: rgba(255, 255, 255, 0.54);
    }

    @media (max-width: 960px) {
      .reviews-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ReviewsSectionComponent {
  protected readonly reviews = inject(NielDataService).reviews;
}


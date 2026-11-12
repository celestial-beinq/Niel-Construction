import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewsCategory, NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-news-page',
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
    <main>
      <app-subpage-hero
        eyebrow="FIELD DISPATCHES"
        titleMuted="Site milestones,"
        titleSolid="safety &amp; engineering news."
        subtitle="Project topping-out reports, ISO compliance updates, and virtual construction insights from NIEL field leadership."
        metaRight="NIEL JOURNAL // 2026"
      />

      <section class="news-catalog">
        <div class="container">
          <div class="filter-bar" role="tablist" aria-label="Filter articles">
            @for (cat of categories; track cat) {
              <button
                type="button"
                role="tab"
                class="filter-btn"
                [class.filter-btn--active]="activeCategory() === cat"
                (click)="activeCategory.set(cat)"
              >
                {{ cat }}
              </button>
            }
          </div>

          <div class="articles-grid">
            @for (article of filteredArticles(); track article.slug) {
              <a class="article-card" [routerLink]="['/news', article.slug]">
                <div class="article-card__media">
                  <img [src]="article.image" [alt]="article.title" loading="lazy" />
                </div>
                <div class="article-card__body">
                  <div class="article-card__meta">
                    <span class="article-card__cat">{{ article.category }}</span>
                    <span>{{ article.date }}</span>
                  </div>
                  <h2 class="article-card__title">{{ article.title }}</h2>
                  <p class="article-card__excerpt">{{ article.excerpt }}</p>
                  <div class="article-card__footer">
                    <span>{{ article.readTime }}</span>
                    <span>READ DISPATCH →</span>
                  </div>
                </div>
              </a>
            }
          </div>
        </div>
      </section>

      <app-estimate-cta-section />
    </main>
    <app-footer />
  `,
  styles: `
    .news-catalog {
      background: var(--niel-bg-light);
      color: var(--niel-text-dark);
      padding-block: clamp(4rem, 7vw, 6rem);
    }

    .filter-bar {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      padding: 0.25rem;
      border-radius: var(--radius-md);
      background: #ffffff;
      border: 1px solid var(--niel-border-light);
      margin-bottom: 2.5rem;
    }

    .filter-btn {
      padding: 0.5rem 0.875rem;
      border: none;
      border-radius: var(--radius-sm);
      background: transparent;
      color: var(--niel-text-muted-light);
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
    }

    .filter-btn--active {
      background: var(--niel-text-dark);
      color: #ffffff;
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .article-card {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border: 1px solid var(--niel-border-light);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .article-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 34px rgba(14, 19, 23, 0.08);
    }

    .article-card__media {
      aspect-ratio: 16 / 10;
      overflow: hidden;
      background: #14191e;
    }

    .article-card__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .article-card__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 1.5rem;
    }

    .article-card__meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      color: var(--niel-text-muted-light);
    }

    .article-card__cat {
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-sm);
      background: var(--niel-bg-light);
      color: var(--niel-accent);
      font-weight: 600;
    }

    .article-card__title {
      margin: 0 0 0.75rem;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .article-card__excerpt {
      margin: 0 0 1.5rem;
      font-size: 0.90625rem;
      line-height: 1.58;
      color: var(--niel-text-muted-light);
    }

    .article-card__footer {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid var(--niel-border-light);
      display: flex;
      justify-content: space-between;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      color: var(--niel-text-dark);
    }

    @media (max-width: 960px) {
      .articles-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class NewsPage {
  private readonly data = inject(NielDataService);
  protected readonly categories: ('ALL' | NewsCategory)[] = [
    'ALL',
    'MILESTONE',
    'SAFETY',
    'INNOVATION',
  ];
  protected readonly activeCategory = signal<'ALL' | NewsCategory>('ALL');

  protected readonly filteredArticles = computed(() => {
    const selected = this.activeCategory();
    if (selected === 'ALL') {
      return this.data.articles;
    }
    return this.data.articles.filter((a) => a.category === selected);
  });
}


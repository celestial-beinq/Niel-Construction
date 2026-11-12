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
  selector: 'app-news-detail-page',
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
    @if (article(); as art) {
      <main>
        <app-subpage-hero
          [eyebrow]="art.category + ' // ' + art.date"
          [titleMuted]="art.title"
          titleSolid=""
          [subtitle]="art.excerpt"
          [metaRight]="art.readTime"
        />

        <section class="article-body-section">
          <div class="container article-container">
            <div class="article-author-bar" data-aos="fade-down">
              <div>
                <strong>{{ art.author }}</strong>
                <span>{{ art.authorRole }}</span>
              </div>
              <a routerLink="/news" class="back-link">← ALL DISPATCHES</a>
            </div>

            <div class="article-hero-img" data-aos="zoom-in">
              <img [src]="art.image" [alt]="art.title" />
            </div>

            <div class="article-prose">
              @for (p of art.paragraphs; track $index) {
                <p data-aos="fade-up" [attr.data-aos-delay]="$index * 60">{{ p }}</p>
              }
            </div>
          </div>
        </section>

        <app-estimate-cta-section />
      </main>
    }
    <app-footer />
  `,
  styles: `
    .article-body-section {
      background: #ffffff;
      color: var(--niel-text-dark);
      padding-block: clamp(3.5rem, 6vw, 5.5rem);
    }

    .article-container {
      max-width: 880px;
    }

    .article-author-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
      border-bottom: 1px solid var(--niel-border-light);
    }

    .article-author-bar strong {
      display: block;
      font-size: 1rem;
    }

    .article-author-bar span {
      font-family: var(--font-mono);
      font-size: 0.71875rem;
      color: var(--niel-text-muted-light);
    }

    .back-link {
      font-family: var(--font-mono);
      font-size: 0.71875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      color: var(--niel-accent);
    }

    .article-hero-img {
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-bottom: 2.5rem;
      aspect-ratio: 16 / 9;
    }

    .article-hero-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .article-prose {
      display: flex;
      flex-direction: column;
      gap: 1.375rem;
    }

    .article-prose p {
      margin: 0;
      font-size: 1.0625rem;
      line-height: 1.72;
      color: #363f47;
    }
  `,
})
export class NewsDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(NielDataService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly article = computed(
    () => this.data.getArticleBySlug(this.slug()) ?? this.data.articles[0],
  );
}


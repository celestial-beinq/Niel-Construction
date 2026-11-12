import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { MilestonesSectionComponent } from '../../components/milestones-section/milestones-section.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    AboutSectionComponent,
    MilestonesSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <section class="about-hero">
        <div class="container">
          <nav class="about-breadcrumb" aria-label="Breadcrumb" data-aos="fade-down">
            <a routerLink="/" class="about-breadcrumb__link">HOME</a>
            <span class="about-breadcrumb__sep" aria-hidden="true">/</span>
            <span class="about-breadcrumb__current" aria-current="page">ABOUT</span>
          </nav>

          <div class="about-hero__header">
            <h1 class="about-hero__title" data-aos="fade-right" data-aos-delay="60">
              <span class="about-hero__title-solid">Built on a plan.</span>
              <span class="about-hero__title-muted">Since 1998.</span>
            </h1>

            <div class="about-hero__right" data-aos="fade-left" data-aos-delay="120">
              <p class="about-hero__copy">
                NIEL Construction is a general contractor with 27 years of
                commercial, residential and civic work behind it. We lock scope,
                cost and schedule before ground is broken, then build exactly
                what we promised.
              </p>

              <a class="btn-split about-hero__btn" routerLink="/contact">
                <span>GET A FREE ESTIMATE</span>
                <span class="btn-split__arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div class="about-hero__media" data-aos="fade-up" data-aos-delay="160">
            <img
              src="images/about-hero.jpg"
              alt="NIEL Construction active multi-story concrete structure and tower cranes"
              class="about-hero__img"
            />
          </div>
        </div>
      </section>

      <app-about-section />

      <!-- Story & Key Metrics Strip -->
      <section class="story-metrics-section">
        <div class="container">
          <div class="story-copy-grid" data-aos="fade-up">
            <div class="story-copy-grid__spacer" aria-hidden="true"></div>
            <p class="story-copy-grid__text">
              Founded in 1998, NIEL Construction grew from interior fit-outs
              into a full-service contractor delivering towers, campuses and
              private residences across the United States.
            </p>
            <p class="story-copy-grid__text">
              What has not changed is how we work: one accountable project lead,
              weekly reporting on cost, quality and safety, and no surprises at
              handover.
            </p>
          </div>

          <div class="story-metrics-divider"></div>

          <div class="story-metrics-grid" data-aos="fade-up" data-aos-delay="100">
            <div class="story-metric">
              <div class="story-metric__label">YEARS BUILDING</div>
              <div class="story-metric__value">27</div>
            </div>
            <div class="story-metric">
              <div class="story-metric__label">PROJECTS DELIVERED</div>
              <div class="story-metric__value">340<span class="story-metric__accent">+</span></div>
            </div>
            <div class="story-metric">
              <div class="story-metric__label">HANDED OVER ON TIME</div>
              <div class="story-metric__value">98<span class="story-metric__accent">%</span></div>
            </div>
            <div class="story-metric">
              <div class="story-metric__label">LOST-TIME INCIDENTS, 2025</div>
              <div class="story-metric__value">0</div>
            </div>
          </div>
        </div>
      </section>

      <app-milestones-section />

      <app-estimate-cta-section />
    </main>
    <app-footer />
  `,
  styles: `
    .about-hero {
      background-color: #ffffff;
      color: var(--niel-text-dark);
      padding-top: clamp(6.5rem, 10vw, 8.5rem);
      padding-bottom: clamp(2.5rem, 5vw, 4rem);
    }

    .about-breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      margin-bottom: clamp(2rem, 4vw, 3.25rem);
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .about-breadcrumb__link {
      color: #7c858e;
      transition: color 0.2s ease;
    }

    .about-breadcrumb__link:hover {
      color: #0e1317;
    }

    .about-breadcrumb__sep {
      color: #b4bcc4;
    }

    .about-breadcrumb__current {
      color: #0e1317;
    }

    .about-hero__header {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: clamp(2rem, 5vw, 4rem);
      align-items: start;
      margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
    }

    .about-hero__title {
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: clamp(2.625rem, 5.4vw, 4.5rem);
      font-weight: 600;
      line-height: 1.04;
      letter-spacing: -0.035em;
    }

    .about-hero__title-solid {
      color: #0e1317;
    }

    .about-hero__title-muted {
      color: #757d86;
    }

    .about-hero__right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
      padding-top: 0.25rem;
    }

    .about-hero__copy {
      margin: 0;
      max-width: 460px;
      font-size: 1rem;
      line-height: 1.62;
      color: #3f4750;
    }

    .about-hero__btn {
      background-color: #0c1013;
      color: #ffffff;
    }

    .about-hero__btn .btn-split__arrow {
      background-color: #ffffff;
      color: #0c1013;
    }

    .about-hero__media {
      width: 100%;
      border-radius: var(--radius-lg);
      overflow: hidden;
      background-color: #e9ecef;
    }

    .about-hero__img {
      display: block;
      width: 100%;
      height: clamp(280px, 44vw, 560px);
      object-fit: cover;
    }

    .story-metrics-section {
      background-color: #ffffff;
      color: var(--niel-text-dark);
      padding-top: clamp(1.5rem, 3vw, 2.5rem);
      padding-bottom: clamp(4rem, 7vw, 6rem);
    }

    .story-copy-grid {
      display: grid;
      grid-template-columns: 0.6fr 1fr 1fr;
      gap: clamp(1.5rem, 4vw, 3.5rem);
      align-items: start;
      margin-bottom: clamp(2.5rem, 5vw, 3.75rem);
    }

    .story-copy-grid__text {
      margin: 0;
      font-size: 0.96875rem;
      line-height: 1.62;
      color: #4b5563;
    }

    .story-metrics-divider {
      height: 1px;
      background-color: #d5d9de;
      margin-bottom: clamp(1.75rem, 3vw, 2.25rem);
    }

    .story-metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: clamp(1.5rem, 3vw, 2.5rem);
    }

    .story-metric__label {
      margin-bottom: 0.625rem;
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #111827;
    }

    .story-metric__value {
      font-size: clamp(2.5rem, 4.4vw, 3.75rem);
      font-weight: 500;
      line-height: 0.95;
      letter-spacing: -0.04em;
      color: #0e1317;
    }

    .story-metric__accent {
      color: var(--niel-accent);
    }

    @media (max-width: 920px) {
      .about-hero__header,
      .story-copy-grid {
        grid-template-columns: 1fr;
      }

      .story-copy-grid__spacer {
        display: none;
      }

      .story-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 520px) {
      .story-metrics-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class AboutPage {}


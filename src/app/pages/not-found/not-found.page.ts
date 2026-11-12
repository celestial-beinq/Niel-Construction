import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="not-found">
      <div class="container not-found__inner">
        <div class="status-pill status-pill--dark" data-aos="fade-down">
          <span class="status-dot" aria-hidden="true"></span>
          <span>404 // BLUEPRINT NOT FOUND</span>
        </div>
        <h1 class="not-found__title">
          <span class="muted" data-aos="fade-right" data-aos-delay="80">This sector isn’t</span>
          <span data-aos="fade-left" data-aos-delay="140">under construction.</span>
        </h1>
        <p class="not-found__copy" data-aos="fade-up" data-aos-delay="200">
          The page or project dossier you requested has moved or does not exist.
          Return to the NIEL Construction home site.
        </p>
        <a class="btn-split btn-split--white" routerLink="/" data-aos="zoom-in-up" data-aos-delay="260">
          <span>RETURN HOME</span>
          <span class="btn-split__arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </main>
    <app-footer />
  `,
  styles: `
    .not-found {
      min-height: 75vh;
      display: flex;
      align-items: center;
      background: var(--niel-bg-dark);
      color: #ffffff;
      padding-top: 6rem;
    }

    .not-found__inner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .not-found__title {
      margin: 0;
      display: flex;
      flex-direction: column;
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 600;
      line-height: 1.05;
      letter-spacing: -0.03em;
    }

    .not-found__title .muted {
      color: rgba(255, 255, 255, 0.56);
    }

    .not-found__copy {
      margin: 0;
      max-width: 460px;
      color: rgba(255, 255, 255, 0.72);
      line-height: 1.6;
    }
  `,
})
export class NotFoundPage {}


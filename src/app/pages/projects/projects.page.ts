import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SubpageHeroComponent } from '../../components/subpage-hero/subpage-hero.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { ReviewsSectionComponent } from '../../components/reviews-section/reviews-section.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    NavbarComponent,
    SubpageHeroComponent,
    ProjectsSectionComponent,
    ReviewsSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-subpage-hero
        eyebrow="PROJECT PORTFOLIO"
        titleMuted="340+ builds delivered,"
        titleSolid="selected case studies."
        subtitle="Commercial headquarters, high-bay industrial parks, and contemporary residential developments engineered and delivered by NIEL Construction."
        metaRight="1.2M+ SQ FT BUILT"
      />
      <app-projects-section />
      <app-reviews-section />
      <app-estimate-cta-section />
    </main>
    <app-footer />
  `,
})
export class ProjectsPage {}


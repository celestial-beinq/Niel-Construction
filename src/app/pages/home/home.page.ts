import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoMarqueeComponent } from '../../components/logo-marquee/logo-marquee.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { ReviewsSectionComponent } from '../../components/reviews-section/reviews-section.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { NewsSectionComponent } from '../../components/news-section/news-section.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    LogoMarqueeComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    ReviewsSectionComponent,
    FaqSectionComponent,
    NewsSectionComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}

import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { ServicesPage } from './pages/services/services.page';
import { ServiceDetailPage } from './pages/service-detail/service-detail.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { ProjectDetailPage } from './pages/project-detail/project-detail.page';
import { NewsPage } from './pages/news/news.page';
import { NewsDetailPage } from './pages/news-detail/news-detail.page';
import { ContactPage } from './pages/contact/contact.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'NIEL Construction — Home' },
  { path: 'about', component: AboutPage, title: 'About — NIEL Construction' },
  { path: 'services', component: ServicesPage, title: 'Services — NIEL Construction' },
  { path: 'services/:slug', component: ServiceDetailPage, title: 'Service Detail — NIEL Construction' },
  { path: 'projects', component: ProjectsPage, title: 'Projects — NIEL Construction' },
  { path: 'projects/:slug', component: ProjectDetailPage, title: 'Project Case Study — NIEL Construction' },
  { path: 'news', component: NewsPage, title: 'News — NIEL Construction' },
  { path: 'news/:slug', component: NewsDetailPage, title: 'Field Dispatch — NIEL Construction' },
  { path: 'contact', component: ContactPage, title: 'Get Estimate — NIEL Construction' },
  { path: '**', component: NotFoundPage, title: '404 — NIEL Construction' },
];

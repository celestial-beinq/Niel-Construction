import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { NielDataService } from './services/niel-data.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const data = inject(NielDataService);
      return data.services.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const data = inject(NielDataService);
      return data.projects.map((p) => ({ slug: p.slug }));
    },
  },
  {
    path: 'news/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const data = inject(NielDataService);
      return data.articles.map((a) => ({ slug: a.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

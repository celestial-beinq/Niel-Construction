import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { EstimateCtaSectionComponent } from '../../components/estimate-cta-section/estimate-cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NielDataService, ProjectCategory } from '../../services/niel-data.service';

type ProjectFilter = 'ALL' | ProjectCategory;

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    EstimateCtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  protected readonly projects = inject(NielDataService).projects;
  protected readonly featuredProject = this.projects[0];

  protected readonly filters: ProjectFilter[] = [
    'ALL',
    'RESIDENTIAL',
    'COMMERCIAL',
    'CIVIC',
    'INDUSTRIAL',
  ];

  protected readonly selectedFilter = signal<ProjectFilter>('ALL');

  protected readonly filteredProjects = computed(() => {
    const active = this.selectedFilter();
    if (active === 'ALL') return this.projects;
    return this.projects.filter((project) => project.category === active);
  });

  protected setFilter(filter: ProjectFilter): void {
    this.selectedFilter.set(filter);
  }

  protected padIndex(value: number): string {
    return value.toString().padStart(2, '0');
  }
}

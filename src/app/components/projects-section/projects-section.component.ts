import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NielDataService, ProjectCategory } from '../../services/niel-data.service';

type FilterCategory = 'ALL' | ProjectCategory;

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  private readonly data = inject(NielDataService);

  protected readonly categories: FilterCategory[] = [
    'ALL',
    'COMMERCIAL',
    'INDUSTRIAL',
    'RESIDENTIAL',
  ];
  protected readonly activeCategory = signal<FilterCategory>('ALL');
  protected readonly projects = this.data.projects;

  protected readonly filteredProjects = computed(() => {
    const selected = this.activeCategory();
    if (selected === 'ALL') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === selected);
  });

  protected setCategory(category: FilterCategory): void {
    this.activeCategory.set(category);
  }
}

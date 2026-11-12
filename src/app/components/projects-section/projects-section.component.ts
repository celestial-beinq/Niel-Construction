import { Component, computed, signal } from '@angular/core';

type ProjectCategory = 'ALL' | 'COMMERCIAL' | 'INDUSTRIAL' | 'RESIDENTIAL';

interface ProjectItem {
  code: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  location: string;
  area: string;
  year: string;
  image: string;
  summary: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  protected readonly categories: ProjectCategory[] = [
    'ALL',
    'COMMERCIAL',
    'INDUSTRIAL',
    'RESIDENTIAL',
  ];
  protected readonly activeCategory = signal<ProjectCategory>('ALL');

  protected readonly projects: ProjectItem[] = [
    {
      code: 'PRJ-041',
      title: 'Apex Meridian Headquarters',
      category: 'COMMERCIAL',
      location: 'Chicago, IL',
      area: '185,000 SQ FT',
      year: '2025',
      image: 'images/project-commercial.jpg',
      summary: '12-story blackened steel and curtain-wall commercial HQ delivered 3 weeks ahead of schedule.',
    },
    {
      code: 'PRJ-038',
      title: 'Northport Logistics & Assembly',
      category: 'INDUSTRIAL',
      location: 'Columbus, OH',
      area: '420,000 SQ FT',
      year: '2025',
      image: 'images/project-industrial.jpg',
      summary: 'High-bay precast distribution facility with 40-ft clear height and automated dock integration.',
    },
    {
      code: 'PRJ-034',
      title: 'The Solis Residences',
      category: 'RESIDENTIAL',
      location: 'Austin, TX',
      area: '142,000 SQ FT',
      year: '2024',
      image: 'images/project-residential.jpg',
      summary: 'Cantilevered architectural concrete and timber multi-family development with LEED Gold rating.',
    },
  ];

  protected readonly filteredProjects = computed(() => {
    const selected = this.activeCategory();
    if (selected === 'ALL') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === selected);
  });

  protected setCategory(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }
}


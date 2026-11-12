import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  private readonly data = inject(NielDataService);

  protected readonly projects = this.data.projects.slice(0, 3);
}

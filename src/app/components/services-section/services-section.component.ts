import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
  protected readonly services = inject(NielDataService).services;
}

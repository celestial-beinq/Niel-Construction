import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.css',
})
export class NewsSectionComponent {
  protected readonly dispatches = inject(NielDataService).articles;
}

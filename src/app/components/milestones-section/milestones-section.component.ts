import { Component, computed, inject, signal } from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-milestones-section',
  standalone: true,
  templateUrl: './milestones-section.component.html',
  styleUrl: './milestones-section.component.css',
})
export class MilestonesSectionComponent {
  protected readonly milestones = inject(NielDataService).timeline;
  protected readonly activeIndex = signal(0);

  protected readonly currentMilestone = computed(
    () => this.milestones[this.activeIndex()] ?? this.milestones[0],
  );

  protected selectMilestone(index: number): void {
    this.activeIndex.set(index);
  }

  protected padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}

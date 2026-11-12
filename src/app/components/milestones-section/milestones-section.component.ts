import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NielDataService } from '../../services/niel-data.service';

@Component({
  selector: 'app-milestones-section',
  standalone: true,
  templateUrl: './milestones-section.component.html',
  styleUrl: './milestones-section.component.css',
})
export class MilestonesSectionComponent {
  private readonly hostRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly milestones = inject(NielDataService).timeline;
  protected readonly activeIndex = signal(0);

  protected readonly currentMilestone = computed(
    () => this.milestones[this.activeIndex()] ?? this.milestones[0],
  );

  @HostListener('window:scroll')
  @HostListener('window:resize')
  protected onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId) || window.innerWidth <= 920) {
      return;
    }

    const section = this.hostRef.nativeElement.querySelector(
      '.milestones-section',
    ) as HTMLElement | null;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable <= 0) return;

    const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
    const progress = scrolled / totalScrollable;
    const nextIndex = Math.min(
      this.milestones.length - 1,
      Math.floor(progress * this.milestones.length),
    );

    if (nextIndex !== this.activeIndex()) {
      this.activeIndex.set(nextIndex);
    }
  }

  protected selectMilestone(index: number): void {
    this.activeIndex.set(index);

    if (!isPlatformBrowser(this.platformId) || window.innerWidth <= 920) {
      return;
    }

    const section = this.hostRef.nativeElement.querySelector(
      '.milestones-section',
    ) as HTMLElement | null;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable <= 0) return;

    const targetRatio = (index + 0.05) / this.milestones.length;
    const targetY =
      sectionTop + Math.min(totalScrollable, totalScrollable * targetRatio);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  protected padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}

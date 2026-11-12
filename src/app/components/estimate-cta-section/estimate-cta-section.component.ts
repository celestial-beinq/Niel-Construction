import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estimate-cta-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './estimate-cta-section.component.html',
  styleUrl: './estimate-cta-section.component.css',
})
export class EstimateCtaSectionComponent {
  protected readonly submitted = signal<boolean>(false);

  protected form = {
    name: '',
    email: '',
    sector: '',
    budget: '',
    startDate: '',
    notes: '',
  };

  protected readonly sectors = [
    'Commercial Construction',
    'Industrial & Logistics',
    'Multi-Family Residential',
    'Design-Build',
    'Pre-Construction / BIM',
    'Renovation & Fit-Out',
  ];

  protected readonly budgets = [
    '₦1.5B – ₦5B',
    '₦5B – ₦20B',
    '₦20B – ₦50B',
    '₦50B+',
  ];

  protected readonly quarters = [
    'Q3 2026',
    'Q4 2026',
    'Q1 2027',
    'Q2 2027',
    'Q3 2027',
  ];

  protected submitRequest(): void {
    if (!this.form.name.trim() || !this.form.email.trim()) {
      return;
    }
    this.submitted.set(true);
  }

  protected resetForm(): void {
    this.submitted.set(false);
    this.form = {
      name: '',
      email: '',
      sector: '',
      budget: '',
      startDate: '',
      notes: '',
    };
  }
}

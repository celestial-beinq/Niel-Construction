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
    company: '',
    email: '',
    sector: 'Commercial',
    budget: '$10M – $35M',
    startDate: 'Q1 2027',
    area: '',
    notes: '',
  };

  protected readonly budgets = [
    '$3M – $10M',
    '$10M – $35M',
    '$35M – $75M',
    '$75M+',
  ];

  protected readonly sectors = [
    'Commercial',
    'Industrial & Logistics',
    'Multi-Family Residential',
    'Pre-Construction / BIM',
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
      company: '',
      email: '',
      sector: 'Commercial',
      budget: '$10M – $35M',
      startDate: 'Q1 2027',
      area: '',
      notes: '',
    };
  }
}


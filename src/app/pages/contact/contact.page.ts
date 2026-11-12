import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
})
export class ContactPage {
  protected readonly submitted = signal(false);
  protected readonly openFaq = signal<number | null>(0);

  protected form = {
    fullName: '',
    email: '',
    projectType: '',
    budget: '',
    plannedStart: '',
    about: '',
  };

  protected readonly projectTypes = [
    'Commercial',
    'Residential',
    'Civic',
    'Industrial',
    'Renovation',
  ];

  protected readonly budgets = [
    'Under ₦500M',
    '₦500M – ₦2B',
    '₦2B – ₦10B',
    '₦10B+',
  ];

  protected readonly quarters = [
    'Q1 2027',
    'Q2 2027',
    'Q3 2027',
    'Q4 2027 or later',
  ];

  protected readonly offices = [
    {
      label: 'HEADQUARTERS · LAGOS',
      city: 'Victoria Island, Lagos',
      address: 'Plot 14 Adeola Odeku St, Victoria Island, Lagos',
      phone: '+234 809 555 0198',
      phoneHref: '+2348095550198',
      email: 'lagos@nielconstruction.com',
      hours: 'Mon – Sat · 06:30 – 18:30',
    },
    {
      label: 'REGIONAL · ABUJA',
      city: 'Wuse II, Abuja',
      address: 'Plot 422 Aminu Kano Crescent, Wuse II, Abuja',
      phone: '+234 809 555 0240',
      phoneHref: '+2348095550240',
      email: 'abuja@nielconstruction.com',
      hours: 'Mon – Sat · 07:00 – 18:00',
    },
    {
      label: 'REGIONAL · PORT HARCOURT',
      city: 'New GRA, Port Harcourt',
      address: '28 Aba Road, New GRA, Port Harcourt',
      phone: '+234 809 555 0312',
      phoneHref: '+2348095550312',
      email: 'portharcourt@nielconstruction.com',
      hours: 'Mon – Sat · 07:00 – 18:00',
    },
  ];

  protected readonly faqs = [
    {
      question: 'How quickly will I hear back?',
      answer:
        'An estimator replies within one business day to confirm what we received and book a short call. Urgent site issues on active NIEL Construction projects go straight to your project lead.',
    },
    {
      question: 'What should I include in my request?',
      answer:
        'Share your site location, approximate square footage or scope, target start quarter, and whether architectural or structural drawings are already underway.',
    },
    {
      question: 'Is the estimate really free?',
      answer:
        'Yes. Preliminary feasibility reviews, site walks, and budget range estimates are provided at no charge before any pre-construction or building contract is signed.',
    },
    {
      question: 'Do you visit the site before pricing?',
      answer:
        'Always for active builds. Our project director and senior estimator walk the site to verify access, soil conditions, and utility tie-ins before locking a fixed or GMP price.',
    },
    {
      question: 'Which regions do you work in?',
      answer:
        'We operate out of Lagos, Abuja, and Port Harcourt, delivering commercial, residential, civic, and industrial infrastructure across Nigeria.',
    },
  ];

  protected submitRequest(): void {
    this.submitted.set(true);
  }

  protected resetForm(): void {
    this.submitted.set(false);
    this.form = {
      fullName: '',
      email: '',
      projectType: '',
      budget: '',
      plannedStart: '',
      about: '',
    };
  }

  protected toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}

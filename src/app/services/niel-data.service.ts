import { Injectable } from '@angular/core';

export interface ServiceItem {
  slug: string;
  index: string;
  tag: string;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  typicalTimeline: string;
  contractModel: string;
  processSteps: { step: string; title: string; detail: string }[];
}

export type ProjectCategory = 'COMMERCIAL' | 'INDUSTRIAL' | 'RESIDENTIAL';

export interface ProjectItem {
  slug: string;
  code: string;
  title: string;
  category: ProjectCategory;
  location: string;
  area: string;
  year: string;
  duration: string;
  value: string;
  client: string;
  contractType: string;
  image: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  clientQuote: {
    quote: string;
    author: string;
    role: string;
  };
}

export type NewsCategory = 'MILESTONE' | 'SAFETY' | 'INNOVATION';

export interface NewsArticle {
  slug: string;
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  paragraphs: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  metric: string;
  description: string;
}

export interface ClientReview {
  quote: string;
  author: string;
  role: string;
  company: string;
  projectCode: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

@Injectable({ providedIn: 'root' })
export class NielDataService {
  readonly partnerLogos = [
    { name: 'Gateway', style: 'serif' },
    { name: 'orbit&co', style: 'bold' },
    { name: 'VANTA-BUILD', style: 'mono' },
    { name: 'NORTHFIELD', style: 'caps' },
    { name: 'Arcline', style: 'serif' },
    { name: 'meridian°', style: 'sans' },
  ];

  readonly services: ServiceItem[] = [
    {
      slug: 'general-contracting',
      index: '01',
      tag: 'BUILD',
      title: 'General Contracting',
      image: 'images/service-contracting.jpg',
      shortDesc:
        'Full site management, trades and safety under one contract.',
      fullDesc:
        'NIEL Construction acts as your single point of field accountability from mobilization to certificate of occupancy. Our superintendents run tight weekly look-ahead schedules, open-book cost ledgers, and ISO 45001 safety audits on every active site.',
      deliverables: [
        'GMP & Lump-Sum Delivery',
        'Dedicated Site Superintendent',
        'Weekly Milestone Reporting',
        'Self-Performed Concrete & Framing',
      ],
      idealFor: 'Commercial HQs, Institutional Campuses, Multi-Family Developments',
      typicalTimeline: '8 – 24 Months',
      contractModel: 'Guaranteed Maximum Price (GMP) or Stipulated Sum',
      processSteps: [
        {
          step: '01',
          title: 'Trade Buyout & Mobilization',
          detail: 'Locking vetted Tier-1 subcontractors, site logistics, and safety perimeter setup.',
        },
        {
          step: '02',
          title: 'Structural & Envelope Execution',
          detail: 'Critical-path sequencing of foundations, steel erection, and curtain-wall enclosure.',
        },
        {
          step: '03',
          title: 'MEP Commissioning & Handover',
          detail: 'Full systems testing, punch-list zeroing, and as-built digital twin delivery.',
        },
      ],
    },
    {
      slug: 'design-build',
      index: '02',
      tag: 'DESIGN',
      title: 'Design-Build',
      image: 'images/service-design-build.jpg',
      shortDesc:
        'Architects and builders on one team, one fixed price.',
      fullDesc:
        'By uniting design and field engineering under one NIEL contract, we overlap permitting, structural procurement, and early site work—eliminating change-order friction and accelerating time-to-revenue.',
      deliverables: [
        'Single-Source Accountability',
        'Concurrent Design & Permitting',
        'Fixed-Price Certainty',
        'Integrated Architectural Coordination',
      ],
      idealFor: 'Fast-Track Industrial, Build-to-Suit Commercial, Turnkey Facilities',
      typicalTimeline: '6 – 18 Months',
      contractModel: 'Single Integrated Design-Build Contract',
      processSteps: [
        {
          step: '01',
          title: 'Programming & Concept Pricing',
          detail: 'Aligning operational requirements with real-time market material costs.',
        },
        {
          step: '02',
          title: 'Fast-Track Permitting & Steel Release',
          detail: 'Early foundation and structural steel packages released while interiors finalize.',
        },
        {
          step: '03',
          title: 'Turnkey Commissioning',
          detail: 'Seamless transition from construction to live operations with one warranty.',
        },
      ],
    },
    {
      slug: 'pre-construction',
      index: '03',
      tag: 'PLAN',
      title: 'Pre-construction',
      image: 'images/service-precon.jpg',
      shortDesc:
        'Feasibility, estimating and scheduling before you commit.',
      fullDesc:
        'The most expensive problem on a construction site is one discovered after concrete is poured. Our pre-construction engineers model every structural and MEP intersection in 3D BIM and stress-test budgets against live supplier lead times.',
      deliverables: [
        'BIM / VDC Coordination',
        'Value Engineering Audits',
        'Long-Lead Procurement',
        'Line-Item Cost Modeling',
      ],
      idealFor: 'Complex Urban Sites, Phased Renovations, Capital Planning',
      typicalTimeline: '4 – 12 Weeks',
      contractModel: 'Pre-Construction Services Agreement (PCSA)',
      processSteps: [
        {
          step: '01',
          title: 'Site & Geotechnical Due Diligence',
          detail: 'Subsurface, utility, and zoning constraints mapped before schematic freeze.',
        },
        {
          step: '02',
          title: 'BIM Clash Detection & Value Engineering',
          detail: 'Resolving structural-MEP conflicts digitally and optimizing structural systems.',
        },
        {
          step: '03',
          title: 'GMP Lock & Procurement Schedule',
          detail: 'Delivering a bankable budget and locked critical-path schedule.',
        },
      ],
    },
    {
      slug: 'renovation-fit-out',
      index: '04',
      tag: 'RENEW',
      title: 'Renovation & Fit-out',
      image: 'images/service-renovation.jpg',
      shortDesc:
        'Upgrades and interiors delivered while you stay open.',
      fullDesc:
        'Phased commercial retrofits, structural upgrades, and high-spec interior fit-outs engineered around active tenants and zero operational downtime.',
      deliverables: [
        'Phased Occupied Construction',
        'MEP & Life-Safety Upgrades',
        'ISO 45001 Dust & Noise Control',
        'Custom Architectural Millwork',
      ],
      idealFor: 'Commercial Interiors, Retail Flagships, Healthcare & Adaptive Reuse',
      typicalTimeline: '3 – 12 Months',
      contractModel: 'GMP or Phased Design-Build',
      processSteps: [
        {
          step: '01',
          title: 'Existing Conditions Laser Scan',
          detail: 'Point-cloud scanning of existing structure and MEP risers prior to demolition.',
        },
        {
          step: '02',
          title: 'Off-Hours Phased Execution',
          detail: 'Negative-air containment and quiet-hour structural tie-ins while operations continue.',
        },
        {
          step: '03',
          title: 'Final Fit-Out & Handover',
          detail: 'Precision finishes, acoustic testing, and seamless zone-by-zone turnover.',
        },
      ],
    },
  ];

  readonly projects: ProjectItem[] = [
    {
      slug: 'apex-meridian-headquarters',
      code: 'PRJ-041',
      title: 'Apex Meridian Headquarters',
      category: 'COMMERCIAL',
      location: 'Victoria Island, Lagos',
      area: '185,000 SQ FT',
      year: '2025',
      duration: '16 MONTHS',
      value: '₦48.5B',
      client: 'Meridian Commercial Group',
      contractType: 'GMP General Contracting',
      image: 'images/project-commercial.jpg',
      gallery: [
        'images/project-commercial.jpg',
        'images/hero-construction.jpg',
        'images/project-residential.jpg',
      ],
      summary:
        '12-story blackened steel and curtain-wall commercial HQ delivered 3 weeks ahead of schedule.',
      challenge:
        'Tight urban footprint adjacent to active transit lines required zero-laydown crane logistics and acoustic-isolated foundations.',
      solution:
        'NIEL deployed just-in-time structural steel deliveries from a staging yard 4 miles away and pre-assembled unitized curtain-wall panels off-site.',
      outcome:
        'Completed 21 days ahead of the baseline schedule, 2.4% under GMP, with zero lost-time safety incidents across 410,000 labor hours.',
      clientQuote: {
        quote:
          'NIEL gave us complete cost visibility from day one and hit every structural milestone in a difficult downtown corridor.',
        author: 'Rachel Lin',
        role: 'VP of Development, Meridian Commercial Group',
      },
    },
    {
      slug: 'northport-logistics-assembly',
      code: 'PRJ-038',
      title: 'Northport Logistics & Assembly',
      category: 'INDUSTRIAL',
      location: 'Lekki Free Zone, Lagos',
      area: '420,000 SQ FT',
      year: '2025',
      duration: '11 MONTHS',
      value: '₦36.2B',
      client: 'Northport Industrial Partners',
      contractType: 'Design-Build',
      image: 'images/project-industrial.jpg',
      gallery: [
        'images/project-industrial.jpg',
        'images/hero-construction.jpg',
        'images/project-commercial.jpg',
      ],
      summary:
        'High-bay precast distribution facility with 40-ft clear height and automated dock integration.',
      challenge:
        'Automated AS/RS robotics required FF 65 / FL 50 super-flat concrete tolerances across 420,000 sq ft on an aggressive 11-month schedule.',
      solution:
        'Our self-performed concrete division ran dual laser-screed pours overnight while structural precast panels were erected in parallel zones.',
      outcome:
        'Delivered 19 days early with full robotics commissioning certified on the first inspection pass.',
      clientQuote: {
        quote:
          'Their design-build coordination shaved four months off our original projection without compromising slab tolerances.',
        author: 'Marcus Vance',
        role: 'Director of Facilities, Northport Industrial',
      },
    },
    {
      slug: 'the-solis-residences',
      code: 'PRJ-034',
      title: 'The Solis Residences',
      category: 'RESIDENTIAL',
      location: 'Maitama, Abuja',
      area: '142,000 SQ FT',
      year: '2024',
      duration: '14 MONTHS',
      value: '₦29.8B',
      client: 'Solis Urban Living',
      contractType: 'Pre-Construction + GMP',
      image: 'images/project-residential.jpg',
      gallery: [
        'images/project-residential.jpg',
        'images/project-commercial.jpg',
        'images/hero-construction.jpg',
      ],
      summary:
        'Cantilevered architectural concrete and timber multi-family development with LEED Gold rating.',
      challenge:
        'Exposed architectural concrete balconies and warm timber soffits demanded tight thermal-break detailing and finish protection during peak summer.',
      solution:
        'NIEL ran full 3D BIM thermal-bridge modeling during pre-construction and implemented custom-formwork pour sequencing.',
      outcome:
        'Achieved LEED Gold certification and 100% unit handover on the exact target date.',
      clientQuote: {
        quote:
          'The architectural concrete finish is museum-grade, and NIEL kept our investors informed at every single draw.',
        author: 'Elena Rostova',
        role: 'Managing Partner, Solis Urban Living',
      },
    },
  ];

  readonly articles: NewsArticle[] = [
    {
      slug: 'northport-logistics-topping-out',
      date: 'OCT 2026',
      category: 'MILESTONE',
      title: 'NIEL Completes Structural Topping-Out on Northport Logistics Phase II',
      excerpt:
        '420,000 sq ft of high-tolerance precast tilt-up completed 19 days ahead of baseline schedule with zero recordable incidents.',
      readTime: '3 MIN READ',
      author: 'Daniel Hayes',
      authorRole: 'Project Director, NIEL Construction',
      image: 'images/project-industrial.jpg',
      paragraphs: [
        'This week, the NIEL Construction field team placed the final structural roof truss on Northport Logistics Phase II in Lekki Free Zone, Lagos—marking a major milestone 19 calendar days ahead of our baseline critical-path schedule.',
        'Spanning 420,000 square feet with a 40-foot clear height, the facility integrates super-flat laser-screeded slabs designed specifically for high-density autonomous storage and retrieval systems.',
        'By overlapping precast panel fabrication with deep-utility installation during pre-construction, our design-build division eliminated six weeks of traditional sequential waiting time while maintaining a 0.00 recordable incident rate.',
      ],
    },
    {
      slug: 'iso-45001-safety-recertification',
      date: 'SEP 2026',
      category: 'SAFETY',
      title: 'Recertified for ISO 45001 Occupational Health & Safety Standards',
      excerpt:
        'Annual independent audit confirms a 0.42 EMR across 34 active commercial and industrial sites nationwide.',
      readTime: '2 MIN READ',
      author: 'Sarah Jenkins',
      authorRole: 'Director of HSE & Compliance',
      image: 'images/hero-construction.jpg',
      paragraphs: [
        'NIEL Construction has successfully completed its annual independent surveillance audit for ISO 45001 Occupational Health & Safety and ISO 9001 Quality Management systems with zero non-conformities.',
        'Across 34 active job sites and more than 1.2 million labor hours over the past year, our Experience Modification Rate (EMR) improved to 0.42—less than half the national commercial construction average.',
        'Every morning at 06:30, NIEL superintendents lead mandatory 10-minute hazard-mapping huddles with every trade on site, ensuring safety is engineered into daily workflows rather than treated as paperwork.',
      ],
    },
    {
      slug: 'bim-field-telemetry-rework-reduction',
      date: 'AUG 2026',
      category: 'INNOVATION',
      title: 'How Real-Time BIM Field Telemetry Eliminates Change-Order Surprises',
      excerpt:
        'Inside our pre-construction clash detection workflow that saved clients ₦3.6B in rework over the past 12 months.',
      readTime: '4 MIN READ',
      author: 'David Okafor',
      authorRole: 'Head of Virtual Design & Construction',
      image: 'images/project-commercial.jpg',
      paragraphs: [
        'Most construction cost overruns happen in the ceiling plenum—where structural steel, HVAC ductwork, fire suppression, and electrical conduit compete for the same three inches of clearance.',
        'At NIEL, every project goes through federated 3D BIM clash detection before a single trade mobilizes. Over the past 12 months, this discipline resolved 1,400+ potential field conflicts digitally, saving our clients an estimated ₦3.6B in rework and schedule delays.',
        'Field tablets sync directly with the federated model, giving superintendents millimeter-accurate layout verification in real time.',
      ],
    },
  ];

  readonly timeline: TimelineMilestone[] = [
    {
      year: '1998',
      title: 'Foundation in Commercial Contracting',
      metric: 'FIRST 12 PROJECTS',
      description:
        'Founded with a single structural crew focused on mid-rise commercial interiors and light industrial builds.',
    },
    {
      year: '2006',
      title: 'Launch of Self-Performed Concrete & Design-Build',
      metric: '100+ BUILDS',
      description:
        'Expanded into full-service design-build and self-performed structural concrete to control critical-path schedules.',
    },
    {
      year: '2014',
      title: 'ISO 9001 & 45001 Dual Certification',
      metric: '0.45 EMR BENCHMARK',
      description:
        'Formalized enterprise quality and zero-incident safety systems across commercial, residential, and heavy civil divisions.',
    },
    {
      year: '2020',
      title: 'BIM / VDC Pre-Construction Lab',
      metric: '1.0M+ SQ FT MODELED',
      description:
        'Integrated federated 3D clash detection and open-book cost telemetry into every pre-construction engagement.',
    },
    {
      year: '2026',
      title: '340+ Projects & ₦1.1T Delivered',
      metric: '98% ON-TIME HANDOVER',
      description:
        'Operating across commercial headquarters, high-bay industrial parks, and landmark multi-family developments.',
    },
  ];

  readonly reviews: ClientReview[] = [
    {
      quote:
        'NIEL gave us complete cost visibility from day one and hit every structural milestone in a difficult downtown corridor.',
      author: 'Rachel Lin',
      role: 'VP of Development',
      company: 'Meridian Commercial Group',
      projectCode: 'PRJ-041',
    },
    {
      quote:
        'Their design-build coordination shaved four months off our original projection without compromising slab tolerances.',
      author: 'Marcus Vance',
      role: 'Director of Facilities',
      company: 'Northport Industrial Partners',
      projectCode: 'PRJ-038',
    },
    {
      quote:
        'The architectural concrete finish is museum-grade, and NIEL kept our investors informed at every single draw.',
      author: 'Elena Rostova',
      role: 'Managing Partner',
      company: 'Solis Urban Living',
      projectCode: 'PRJ-034',
    },
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'How quickly can NIEL provide a preliminary construction estimate?',
      answer:
        'Our pre-construction desk delivers a preliminary cost range and milestone schedule within 24–48 hours of receiving your site location, target square footage, and schematic drawings.',
    },
    {
      question: 'Do you work under Guaranteed Maximum Price (GMP) contracts?',
      answer:
        'Yes. Over 80% of our commercial and multi-family builds are delivered under open-book GMP contracts, giving owners full line-item transparency and 100% savings return below the cap.',
    },
    {
      question: 'Can NIEL join a project during early feasibility before architects are finalized?',
      answer:
        'Yes—and we recommend it. Engaging NIEL during pre-construction allows us to run constructability reviews, value engineering, and long-lead steel/switchgear procurement before design freeze.',
    },
    {
      question: 'What geographic regions and project sizes do you cover?',
      answer:
        'We execute commercial, residential, and industrial projects ranging from ₦1.5B to ₦90B+ across Lagos, Abuja, Port Harcourt, and major industrial corridors in Nigeria.',
    },
  ];

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services.find((s) => s.slug === slug);
  }

  getProjectBySlug(slug: string): ProjectItem | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  getArticleBySlug(slug: string): NewsArticle | undefined {
    return this.articles.find((a) => a.slug === slug);
  }
}


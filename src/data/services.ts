export interface ServiceItem {
  title: string;
  description?: string;
}

export interface ServiceSection {
  id: string;
  heading: string;
  items: ServiceItem[];
}

export interface ServicePage {
  slug: string;
  title: string;
  intro: string;
  sections: ServiceSection[];
  disclaimer?: string;
}

export const incomeTaxServices: ServicePage = {
  slug: 'income-tax-services',
  title: 'Income Tax Services',
  intro: 'Compliance-focused direct-tax services designed to help individuals and businesses file accurately, plan responsibly, and respond effectively to tax matters.',
  sections: [
    {
      id: 'compliance-filing',
      heading: 'Tax Compliance and Filing',
      items: [
        { title: 'Preparation and filing of Income Tax Returns for individuals' },
        { title: 'Income Tax Returns for HNIs' },
        { title: 'Returns for firms and companies' },
        { title: 'TDS return filing' },
        { title: 'TCS return filing' },
        { title: 'Issuance and support for applicable TDS certificates' },
        { title: 'Tax audit reports under Section 44AB' },
      ],
    },
    {
      id: 'advisory-planning',
      heading: 'Tax Advisory and Planning',
      items: [
        { title: 'Advance-tax estimation and planning' },
        { title: 'Capital-gains tax planning for property' },
        { title: 'Capital-gains planning for shares and investments' },
        { title: 'Tax considerations relating to crypto assets' },
        { title: 'Responsible tax planning based on applicable law' },
      ],
    },
    {
      id: 'nri-taxation',
      heading: 'NRI Taxation',
      items: [
        { title: 'NRI Income Tax Return support' },
        { title: 'Form 15CA and Form 15CB assistance' },
        { title: 'DTAA-related guidance' },
        { title: 'Tax treatment of Indian income and investments' },
      ],
    },
    {
      id: 'representation',
      heading: 'Representation and Tax Matters',
      items: [
        { title: 'Assistance with scrutiny notices' },
        { title: 'Preparation of responses to Income Tax notices' },
        { title: 'Rectification requests' },
        { title: 'Refund follow-ups' },
        { title: 'Representation support before tax authorities' },
        { title: 'Assistance relating to CIT and ITAT appeals' },
      ],
    },
  ],
  disclaimer:
    'Tax treatment depends on individual facts and applicable law. Services are provided after reviewing the relevant documents and circumstances.',
};

export const gstServices: ServicePage = {
  slug: 'gst-services',
  title: 'GST Registration, Filing and Advisory Services',
  intro: 'End-to-end GST support for registrations, periodic compliance, reconciliations, refunds, audits, and departmental matters.',
  sections: [
    {
      id: 'registration-maintenance',
      heading: 'GST Registration and Maintenance',
      items: [
        { title: 'New GST registration' },
        { title: 'GST registration amendment' },
        { title: 'GST registration cancellation' },
        { title: 'Revocation of cancelled GST registration' },
        { title: 'Assistance with registration-related clarifications' },
      ],
    },
    {
      id: 'periodic-compliance',
      heading: 'Periodic GST Compliance',
      items: [
        { title: 'Monthly and quarterly GSTR-1 filing' },
        { title: 'GSTR-3B filing' },
        { title: 'Annual return filing through GSTR-9' },
        { title: 'Self-certified reconciliation statement support through GSTR-9C' },
        { title: 'E-way bill assistance' },
        { title: 'E-invoicing implementation and support' },
      ],
    },
    {
      id: 'audit-health',
      heading: 'GST Audit and Health Checks',
      items: [
        { title: 'Internal GST compliance review' },
        { title: 'Identification of filing and reconciliation gaps' },
        { title: 'GSTR-2B versus purchase-register reconciliation' },
        { title: 'Input Tax Credit review and optimisation' },
        { title: 'Vendor-compliance observations' },
        { title: 'Preparation support before departmental review' },
      ],
    },
    {
      id: 'specialised-gst',
      heading: 'Specialised GST Support',
      items: [
        { title: 'GST refund applications for exports' },
        { title: 'Refund support under the inverted-duty structure' },
        { title: 'Assistance with GST notices' },
        { title: 'Assistance with summons and departmental communication' },
        { title: 'GST guidance for specific transactions' },
      ],
    },
  ],
  disclaimer:
    'GST compliance requirements are subject to change. Services are provided based on prevailing rules and the documents supplied by the client.',
};

export const businessServices: ServicePage = {
  slug: 'business-advisory-services',
  title: 'Business Setup, Accounting and Strategic Advisory',
  intro: 'From registrations and bookkeeping to digital transformation — practical advisory to help your business stay organised, compliant, and efficient.',
  sections: [
    {
      id: 'setup-registration',
      heading: 'Business Setup and Registration',
      items: [
        { title: 'Sole-proprietorship registration support' },
        { title: 'Partnership registration support' },
        { title: 'LLP registration support' },
        { title: 'Company-registration coordination' },
        { title: 'MSME and Udyam registration' },
        { title: 'Startup India certification assistance' },
        { title: 'ROC filing and compliance support' },
      ],
    },
    {
      id: 'accounting-cfo',
      heading: 'Accounting and Virtual CFO Services',
      items: [
        { title: 'Outsourced bookkeeping' },
        { title: 'Periodic financial reporting' },
        { title: 'Payroll-management support' },
        { title: 'Cash-flow forecasting' },
        { title: 'Budget preparation' },
        { title: 'Management reporting for SMEs' },
        { title: 'Compliance-calendar support' },
        { title: 'Coordination between tax, accounts, and business operations' },
      ],
    },
    {
      id: 'real-estate',
      heading: 'Real Estate and Land Advisory',
      items: [
        { title: 'Tax implications of commercial-to-agricultural land conversion' },
        { title: 'Tax guidance for property transactions' },
        { title: 'GST considerations in Joint Development Agreements' },
        { title: 'Capital-gains considerations for land and property' },
      ],
    },
    {
      id: 'digital-transformation',
      heading: 'Digital Transformation',
      items: [
        { title: 'Moving from manual billing to GST-compliant billing' },
        { title: 'Cloud-accounting migration support' },
        { title: 'Digital record-maintenance processes' },
        { title: 'Accounting workflow improvement' },
        { title: 'GST-compliant invoice setup' },
      ],
    },
  ],
};

// Overview cards for home page
export const serviceOverview = [
  {
    title: 'Income Tax Services',
    description:
      'Return filing, tax planning, TDS compliance, NRI taxation, notices, refunds, and representation.',
    href: '/income-tax-services/',
    icon: 'file-text',
  },
  {
    title: 'GST Services',
    description:
      'Registration, periodic returns, reconciliation, refunds, audits, e-invoicing, and notice support.',
    href: '/gst-services/',
    icon: 'receipt',
  },
  {
    title: 'Business & Advisory Services',
    description:
      'Business registrations, accounting, Virtual CFO support, payroll, financial reporting, and digital transformation.',
    href: '/business-advisory-services/',
    icon: 'briefcase',
  },
] as const;

// Featured highlights for home page
export const featuredHighlights = [
  'Income Tax Return filing',
  'GST return filing',
  'GST registration',
  'TDS and TCS compliance',
  'Accounting and bookkeeping',
  'Company and business registrations',
  'ROC compliance support',
  'Tax notice assistance',
] as const;

// Client types for home page
export const clientTypes = [
  { label: 'Salaried Individuals', icon: 'user' },
  { label: 'High-Net-Worth Individuals', icon: 'gem' },
  { label: 'Freelancers & Professionals', icon: 'pen-tool' },
  { label: 'NRIs', icon: 'globe' },
  { label: 'Sole Proprietors', icon: 'store' },
  { label: 'Partnerships & LLPs', icon: 'handshake' },
  { label: 'Startups', icon: 'rocket' },
  { label: 'SMEs & Established Companies', icon: 'building-2' },
] as const;

// Process steps for home page
export const processSteps = [
  {
    step: 1,
    title: 'Share Your Requirements',
    description: 'Tell us about your tax, GST, or business needs through a call, email, or visit.',
  },
  {
    step: 2,
    title: 'Document Review',
    description: 'We review your documents and financial information to understand the full picture.',
  },
  {
    step: 3,
    title: 'Preparation & Verification',
    description: 'Returns, registrations, or reports are prepared with thorough checks for accuracy.',
  },
  {
    step: 4,
    title: 'Filing & Ongoing Support',
    description: 'Timely filing and continued assistance for notices, refunds, or future compliance.',
  },
] as const;

// Why choose us points
export const whyChooseUs = [
  {
    title: 'Compliance-First Approach',
    description: 'Every filing and advisory recommendation prioritises accuracy and legal compliance.',
    icon: 'shield-check',
  },
  {
    title: 'Clear Communication',
    description: 'We explain tax and compliance matters in straightforward, practical terms.',
    icon: 'message-circle',
  },
  {
    title: 'For Individuals & Businesses',
    description: 'Whether you are a salaried professional or running a company, we have you covered.',
    icon: 'users',
  },
  {
    title: 'End-to-End Assistance',
    description: 'From initial filing to notices, refunds, and ongoing advisory — complete support.',
    icon: 'check-circle',
  },
] as const;

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
      heading: 'Tax Compliance & Filing',
      items: [
        { title: 'Individual ITR Filing' },
        { title: 'Salaried Employee Returns' },
        { title: 'Business Tax Returns' },
        { title: 'Company Tax Returns' },
        { title: 'TDS Return Filing' },
        { title: 'TCS Compliance' },
        { title: 'Tax Audit u/s 44AB' },
      ],
    },
    {
      id: 'advisory-planning',
      heading: 'Tax Planning & Advisory',
      items: [
        { title: 'Advance Tax Planning' },
        { title: 'Capital Gains Tax Planning' },
        { title: 'Property Sale Tax Planning' },
        { title: 'Stock Market Taxation' },
        { title: 'Cryptocurrency Taxation' },
        { title: 'NRI Taxation' },
        { title: 'DTAA Advisory' },
        { title: 'Form 15CA' },
        { title: 'Form 15CB' },
      ],
    },
    {
      id: 'representation',
      heading: 'Representation',
      items: [
        { title: 'Income Tax Notices' },
        { title: 'Scrutiny Assessments' },
        { title: 'Refund Follow Up' },
        { title: 'Rectification Requests' },
        { title: 'Appeals' },
        { title: 'Department Representation' },
      ],
    },
  ],
  disclaimer:
    'Tax treatment depends on individual facts and applicable law. Services are provided after reviewing the relevant documents and circumstances.',
};

export const gstServices: ServicePage = {
  slug: 'gst-services',
  title: 'GST Services',
  intro: 'End-to-end GST support for registrations, periodic compliance, reconciliations, refunds, audits, and departmental matters.',
  sections: [
    {
      id: 'registration-maintenance',
      heading: 'Registration',
      items: [
        { title: 'GST Registration' },
        { title: 'Amendment' },
        { title: 'Cancellation' },
        { title: 'Revocation' },
      ],
    },
    {
      id: 'periodic-compliance',
      heading: 'Compliance',
      items: [
        { title: 'GSTR-1' },
        { title: 'GSTR-3B' },
        { title: 'GSTR-9' },
        { title: 'GSTR-9C' },
        { title: 'E-Way Bills' },
        { title: 'E-Invoicing' },
      ],
    },
    {
      id: 'audit-health',
      heading: 'Audit & Reconciliation',
      items: [
        { title: 'Internal GST Audit' },
        { title: 'GST Health Check' },
        { title: 'ITC Optimization' },
        { title: 'GSTR-2B Reconciliation' },
        { title: 'Purchase Register Matching' },
      ],
    },
    {
      id: 'specialised-gst',
      heading: 'Specialized GST Support',
      items: [
        { title: 'GST Refunds' },
        { title: 'Export Refunds' },
        { title: 'Inverted Duty Refunds' },
        { title: 'GST Notices' },
        { title: 'GST Summons' },
        { title: 'GST Litigation Support' },
      ],
    },
  ],
  disclaimer:
    'GST compliance requirements are subject to change. Services are provided based on prevailing rules and the documents supplied by the client.',
};

export const businessServices: ServicePage = {
  slug: 'business-advisory-services',
  title: 'Business Setup, Accounting & Strategic Advisory',
  intro: 'From registrations and bookkeeping to digital transformation — practical advisory to help your business stay organised, compliant, and efficient.',
  sections: [
    {
      id: 'setup-registration',
      heading: 'Business Setup Services',
      items: [
        { title: 'Proprietorship Registration' },
        { title: 'Partnership Registration' },
        { title: 'LLP Registration' },
        { title: 'MSME Registration' },
        { title: 'Udyam Registration' },
        { title: 'Startup India Registration' },
      ],
    },
    {
      id: 'accounting-cfo',
      heading: 'Virtual CFO Services',
      items: [
        { title: 'Bookkeeping' },
        { title: 'Payroll Management' },
        { title: 'Financial Reporting' },
        { title: 'MIS Reports' },
        { title: 'Budget Planning' },
        { title: 'Cash Flow Forecasting' },
      ],
    },
    {
      id: 'real-estate',
      heading: 'Real Estate Tax Advisory',
      items: [
        { title: 'Agricultural Land Taxation' },
        { title: 'Commercial Land Conversion' },
        { title: 'Capital Gains Advisory' },
        { title: 'JDA GST Advisory' },
      ],
    },
    {
      id: 'digital-transformation',
      heading: 'Digital Transformation',
      items: [
        { title: 'GST Cloud Accounting' },
        { title: 'Accounting Automation' },
        { title: 'Digital Bookkeeping' },
        { title: 'Compliance Automation' },
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
  'Income Tax Return Filing',
  'GST Return Filing',
  'GST Registration',
  'TDS and TCS Compliance',
  'MSME Registration',
  'Virtual CFO Services',
  'Company and Business Registrations',
  'NRI Taxation & DTAA Advisory',
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

// Why choose us points - updated
export const whyChooseUs = [
  {
    title: 'GST Registered Business',
    description: 'Professional and compliant tax services.',
    icon: 'shield-check',
  },
  {
    title: 'Expert Tax Support',
    description: 'Dedicated Income Tax and GST experts.',
    icon: 'message-circle',
  },
  {
    title: 'Business Compliance Specialists',
    description: 'End-to-end registrations and filings.',
    icon: 'users',
  },
  {
    title: 'Secure Documentation',
    description: '100% confidential processing.',
    icon: 'lock',
  },
  {
    title: 'PAN India Services',
    description: 'Serving clients across India.',
    icon: 'globe',
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick filing and compliance support.',
    icon: 'check-circle',
  },
] as const;

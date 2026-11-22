import { ServiceType, WorkflowScenario, TargetIndustry } from '../types';

export const CORE_SERVICES: ServiceType[] = [
  {
    id: 'n8n-automation',
    title: 'n8n Workflow Automation',
    shortDesc: 'End-to-end self-hosted & cloud visual automations connecting your entire operational ecosystem.',
    fullDesc: 'We architect robust, scalable n8n pipelines that link your CRMs, databases, email services, and messaging channels. Never copy-paste data between tools again.',
    icon: 'Network',
    tag: 'Core Infrastructure',
    metrics: '99.9% Reliable Execution',
    features: [
      'Complex multi-branch logical routing',
      'Automated webhook listeners & data transformations',
      'Error handling & automated failover notifications',
      'Zero vendor lock-in with self-hosted options'
    ],
    techStack: ['n8n', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Docker']
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    shortDesc: 'Intelligent 24/7 conversational agents that qualify leads, schedule meetings, and update your CRM.',
    fullDesc: 'Transform WhatsApp into your highest-converting sales and support channel. Official Meta Cloud API integrations with natural conversational AI.',
    icon: 'MessageSquare',
    tag: 'High Conversion',
    metrics: '< 45s Lead Response Time',
    features: [
      'Official Meta WhatsApp Cloud API integration',
      'Real-time automated calendar booking & sync',
      'Instant lead qualification & CRM assignment',
      'Automated reminders that eliminate no-shows'
    ],
    techStack: ['Meta Cloud API', 'OpenAI GPT-4o', 'n8n', 'Google Calendar', 'HubSpot']
  },
  {
    id: 'ai-integrations',
    title: 'AI-Powered Workflow Integrations',
    shortDesc: 'Integrate LLMs directly into your business processes for document analysis, triage, and synthesis.',
    fullDesc: 'We embed state-of-the-art vision and language models directly into your daily pipelines—extracting structured JSON from invoices, summarising calls, and generating custom replies.',
    icon: 'Bot',
    tag: 'Intelligent Layer',
    metrics: '85% Reduction in Admin Time',
    features: [
      'Structured PDF & image document extraction',
      'Automated inbound inquiry classification & sentiment triage',
      'Dynamic personalized email and proposal drafting',
      'RAG systems grounded strictly in your company knowledge base'
    ],
    techStack: ['Claude 3.5 Sonnet', 'OpenAI', 'LangChain', 'Pinecone', 'Whisper']
  },
  {
    id: 'custom-automation',
    title: 'Custom Business Automation',
    shortDesc: 'Tailor-engineered automation architecture built around your unique internal bottlenecks.',
    fullDesc: 'Every agency, clinic, and firm has eccentric spreadsheets and manual handoffs. We audit your workflows and engineer elegant automated pipelines from scratch.',
    icon: 'Cpu',
    tag: 'Bespoke Architecture',
    metrics: '20+ Hrs Saved / Employee / Mo',
    features: [
      'Comprehensive end-to-end workflow audit',
      'Custom API connectors and legacy system bridge',
      'Employee onboarding & internal knowledge handoff',
      'Full monitoring, health dashboard & SLA support'
    ],
    techStack: ['Custom Scripts', 'Python', 'n8n', 'Make', 'Airtable', 'Zapier']
  }
];

export const WORKFLOW_SCENARIOS: WorkflowScenario[] = [
  {
    id: 'instagram-creator',
    title: 'Instagram Reel Lead Magnet & WhatsApp Nurture',
    category: 'Creators & Influencers',
    description: 'When an audience member comments a keyword on a Reel, an automated webhook fires, delivers the resource via DM, collects phone number, and hands off to WhatsApp.',
    nodes: [
      {
        id: 'node-1',
        label: 'Instagram Webhook',
        sublabel: 'Comment "AUTOMATE"',
        type: 'trigger',
        iconName: 'Instagram',
        details: 'Monitors Reel #4812 comments for target trigger keyword'
      },
      {
        id: 'node-2',
        label: 'AI Intent Evaluator',
        sublabel: 'GPT-4o Mini Classification',
        type: 'ai',
        iconName: 'Sparkles',
        details: 'Verifies user authenticity, checks follower status & sentiment'
      },
      {
        id: 'node-3',
        label: 'Airtable / CRM Sync',
        sublabel: 'Create / Update Contact',
        type: 'action',
        iconName: 'Database',
        details: 'Logs Instagram handle, timestamp, and asset delivery status'
      },
      {
        id: 'node-4',
        label: 'WhatsApp Dispatcher',
        sublabel: 'Send Resource & Booking Link',
        type: 'notification',
        iconName: 'MessageCircle',
        details: 'Dispatches personalized PDF guide and opens interactive calendar'
      }
    ],
    samplePayload: {
      platform: 'instagram_graph_api',
      event: 'comment_created',
      username: '@alex_creative',
      reel_id: 'C_942817x',
      keyword_detected: 'AUTOMATE',
      processed_at: 'Just now'
    },
    resultSummary: 'Lead captured in CRM, resource delivered in 1.4 seconds, WhatsApp follow-up scheduled.'
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic 24/7 Patient Triage & Booking',
    category: 'Healthcare & Dental',
    description: 'Patient messages WhatsApp with tooth pain. AI triage checks urgency, finds an open doctor slot in the clinic management software, books the appointment, and sends confirmation.',
    nodes: [
      {
        id: 'node-1',
        label: 'WhatsApp Inbound',
        sublabel: 'Patient Emergency Inquiry',
        type: 'trigger',
        iconName: 'MessageSquare',
        details: 'Patient: "I have severe molar pain, do you have openings tomorrow morning?"'
      },
      {
        id: 'node-2',
        label: 'Clinical AI Triage',
        sublabel: 'Urgency & Treatment Classifier',
        type: 'ai',
        iconName: 'HeartPulse',
        details: 'Classifies as Urgent Molar Examination (Dr. Reynolds priority schedule)'
      },
      {
        id: 'node-3',
        label: 'Clinic Calendar API',
        sublabel: 'Check Realtime Availability',
        type: 'router',
        iconName: 'CalendarCheck',
        details: 'Finds available 45min emergency slot: Tomorrow at 10:30 AM'
      },
      {
        id: 'node-4',
        label: 'Automated Confirmation',
        sublabel: 'Calendar Invite & Prep SMS',
        type: 'notification',
        iconName: 'CheckCircle2',
        details: 'Patient confirms via WhatsApp button; PMS record updated; medical history link sent'
      }
    ],
    samplePayload: {
      patient_id: 'PT-8942',
      complaint: 'Severe molar ache',
      urgency_score: 'High',
      doctor_assigned: 'Dr. Sarah Reynolds, DDS',
      slot_allocated: 'Tomorrow 10:30 AM',
      deposit_required: false
    },
    resultSummary: 'Zero phone calls needed. Emergency patient booked in under 60 seconds with 100% calendar sync.'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Lead Qualification & Tour Scheduling',
    category: 'Real Estate',
    description: 'Website or portal visitor submits property inquiry. AI instantly qualifies budget & financing, generates personalized property deck, and books agent viewing.',
    nodes: [
      {
        id: 'node-1',
        label: 'Portal Lead Webhook',
        sublabel: 'Zillow / Website Lead Form',
        type: 'trigger',
        iconName: 'Building2',
        details: 'New inquiry on Listing #882 ($1.2M Luxury Penthouse)'
      },
      {
        id: 'node-2',
        label: 'AI Buyer Qualification',
        sublabel: 'Budget & Timeline Assessment',
        type: 'ai',
        iconName: 'Bot',
        details: 'Calculates pre-approval viability, moves lead to VIP tier'
      },
      {
        id: 'node-3',
        label: 'Brochure Dynamic Generator',
        sublabel: 'Custom PDF Spec Sheet',
        type: 'action',
        iconName: 'FileText',
        details: 'Compiles custom floor plans, neighborhood comps, and tax summary'
      },
      {
        id: 'node-4',
        label: 'WhatsApp VIP Concierge',
        sublabel: 'Private Tour Booking Link',
        type: 'notification',
        iconName: 'Send',
        details: 'Pings lead with PDF and agent tour picker; notifies senior agent via Slack'
      }
    ],
    samplePayload: {
      lead_name: 'Marcus Vance',
      listing_ref: 'PH-882-LUMEN',
      budget_range: '$1.1M - $1.4M',
      timeline: '< 30 days',
      qualified_status: 'VIP_HIGH_INTENT',
      assigned_agent: 'Elena Rostova'
    },
    resultSummary: 'Lead greeted in 12 seconds with high-res brochure. Tour scheduled directly on agent calendar.'
  }
];

export const TARGET_INDUSTRIES: TargetIndustry[] = [
  {
    id: 'instagram-creators',
    name: 'Instagram Reel Creators',
    category: 'Creator Economy',
    iconName: 'Instagram',
    problem: 'Hundreds of comments daily asking for templates, gear, and courses go unanswered, hemorrhaging warm revenue.',
    solution: 'Automated comment triggers that send customized DMs, capture phone numbers, and nurture followers into buyers on WhatsApp.',
    typicalWorkflow: [
      'Audience comments trigger word on Reel',
      'Instant direct message with unique lead magnet link',
      'Follow-up via WhatsApp if email unconfirmed within 2 hours',
      'Sales CRM updated with engagement score'
    ],
    timeSavedWeekly: '18 hours/week',
    roiEstimate: '4.2x Course Sales',
    keyBenefit: 'Monetize viral reach while you sleep without hiring 3 community managers.'
  },
  {
    id: 'dental-clinics',
    name: 'Dental Clinics',
    category: 'Healthcare',
    iconName: 'Stethoscope',
    problem: 'Front desk overwhelmed with repetitive scheduling phone calls, resulting in lost after-hours inquiries and high no-show rates.',
    solution: 'WhatsApp-native 24/7 AI receptionist that handles appointment booking, sends automated pre-visit instructions, and collects deposits.',
    typicalWorkflow: [
      'Patient reaches out on WhatsApp 24/7',
      'AI triage classifies routine checkup vs. emergency toothache',
      'Real-time PMS integration matches patient with right doctor',
      'Automated reminder sequence 24h & 2h prior reduces no-shows'
    ],
    timeSavedWeekly: '25 hours/week',
    roiEstimate: '38% Fewer No-Shows',
    keyBenefit: 'Never miss an emergency patient inquiry after 5 PM.'
  },
  {
    id: 'real-estate-firms',
    name: 'Real Estate Businesses',
    category: 'Property',
    iconName: 'Building2',
    problem: 'Inquiries from property portals sit in inboxes for hours. By the time an agent responds, the buyer has moved to another listing.',
    solution: 'Sub-minute qualification bot that delivers property specs, assesses mortgage readiness, and syncs private viewings to agent calendars.',
    typicalWorkflow: [
      'Inquiry logged from website or ad campaign',
      'AI agent verifies budget, down payment, and purchase timeframe',
      'Dynamic PDF brochure generated and sent instantly',
      'Agent alerted only when buyer is fully qualified and booked'
    ],
    timeSavedWeekly: '22 hours/week',
    roiEstimate: '3.1x Faster Deal Velocity',
    keyBenefit: 'Agents spend 100% of their time showing homes instead of cold-chasing unresponsive leads.'
  },
  {
    id: 'smb-agencies',
    name: 'Agencies & Service Firms',
    category: 'B2B Services',
    iconName: 'Briefcase',
    problem: 'Scattered client onboarding: manual proposal creation, invoice follow-ups, and endless back-and-forth email scheduling.',
    solution: 'End-to-end client onboarding pipeline from signed proposal to Slack channel creation, Google Drive folder setup, and initial invoice dispatch.',
    typicalWorkflow: [
      'Client e-signs contract on PandaDoc/DocuSign',
      'n8n automatically provisions Notion workspace and Slack channel',
      'Stripe invoice dispatched with automated recurring billing',
      'Welcome onboarding questionnaire sent via WhatsApp'
    ],
    timeSavedWeekly: '15 hours/week',
    roiEstimate: 'Zero Onboarding Delay',
    keyBenefit: 'Deliver a white-glove onboarding experience without lifting a finger.'
  },
  {
    id: 'ecommerce-brands',
    name: 'E-commerce Businesses',
    category: 'Retail & D2C',
    iconName: 'ShoppingBag',
    problem: 'High cart abandonment, repeated "Where is my order?" tickets flooding support, and generic email blasts that get ignored.',
    solution: 'Conversational WhatsApp order tracking, abandoned cart recovery with one-click payment links, and dynamic repurchase reminders.',
    typicalWorkflow: [
      'Abandoned checkout detected on Shopify/WooCommerce',
      'Personalized WhatsApp notification sent at 45 minutes with discount',
      'Live parcel tracking bot answers 80% of support questions',
      'Replenishment reminder triggered based on product lifecycle'
    ],
    timeSavedWeekly: '30 hours/week',
    roiEstimate: '22% Cart Recovery Rate',
    keyBenefit: 'Turn customer support into your most profitable retention engine.'
  }
];

export const AGENCY_METRICS = [
  { label: 'Hours Automated / Mo', value: '18,500+', subtext: 'Across client operations' },
  { label: 'Execution Accuracy', value: '99.8%', subtext: 'Production reliability' },
  { label: 'Avg Lead Response Time', value: '< 45s', subtext: 'Down from 4.2 hours' },
  { label: 'Average Client ROI', value: '4.8x', subtext: 'First 90 days' }
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'What is n8n and why does PLUOTOS AI prefer it over Zapier or Make?',
    a: 'n8n is an enterprise-grade, extensible workflow automation platform. Unlike Zapier which charges heavy recurring costs per task and has data privacy constraints, n8n can be self-hosted or cloud-managed, handles sophisticated multi-branch logic, and gives our clients complete ownership of their data with virtually zero per-task penalties.'
  },
  {
    q: 'How does WhatsApp automation work with our existing team?',
    a: 'We integrate directly via the official Meta Cloud API. Routine inquiries, FAQs, lead qualification, and appointment booking are handled automatically 24/7. When a complex question or high-touch client requires human attention, the workflow seamlessly transfers the chat to your team inbox with full conversation history.'
  },
  {
    q: 'How long does an automation project typically take to deploy?',
    a: 'Most targeted workflows (e.g., WhatsApp booking bot, Instagram lead magnet pipeline, or CRM sync) go live within 7 to 14 business days. Complex multi-system enterprise architectures typically take 3 to 4 weeks, including thorough staging sandbox testing and staff training.'
  },
  {
    q: 'Do we need technical expertise on our team to maintain these workflows?',
    a: 'Not at all. PLUOTOS AI builds user-friendly architectures with automated monitoring and self-healing error catchers. We provide interactive documentation, video walkthroughs, and ongoing SLA maintenance packages so your team never touches a line of code.'
  },
  {
    q: 'Is our customer and patient data secure?',
    a: 'Security is paramount. For dental clinics and sensitive healthcare or financial clients, we adhere to HIPAA-compliant and GDPR-compliant architectures, encrypted webhooks, environment-isolated credentials, and zero-retention AI processing.'
  }
];

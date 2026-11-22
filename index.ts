export type ServiceType = {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  techStack: string[];
  metrics: string;
  tag: string;
};

export type WorkflowScenario = {
  id: string;
  title: string;
  category: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    sublabel: string;
    type: 'trigger' | 'ai' | 'router' | 'action' | 'notification';
    iconName: string;
    details: string;
  }[];
  samplePayload: Record<string, any>;
  resultSummary: string;
};

export type TargetIndustry = {
  id: string;
  name: string;
  category: string;
  iconName: string;
  problem: string;
  solution: string;
  typicalWorkflow: string[];
  timeSavedWeekly: string;
  roiEstimate: string;
  keyBenefit: string;
};

export type BookingFormData = {
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  monthlyRepetitiveHours: string;
  automationGoal: string;
  preferredDate: string;
  preferredTime: string;
};

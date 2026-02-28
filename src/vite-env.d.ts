/// <reference types="vite/client" />

interface Skill {
  name: string;
  description: string;
  version: string;
  author: string;
  category: string;
  tools: string[];
  workflows: string[];
  knowledgeBase: string[];
}

interface SkillConfig {
  metadata: {
    name: string;
    version: string;
    description: string;
    author: string;
    category: string;
    createdAt: string;
    updatedAt: string;
  };
  capabilities: {
    tools: string[];
    workflows: Workflow[];
    knowledgeBase: string[];
  };
  configuration: {
    parameters: Parameter[];
    settings: Record<string, any>;
  };
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  triggerConditions?: string[];
}

interface WorkflowStep {
  id: string;
  name: string;
  action: string;
  parameters: Record<string, any>;
  condition?: string;
}

interface Parameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'array' | 'object';
  description: string;
  required: boolean;
  defaultValue?: any;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    enum?: string[];
  };
}

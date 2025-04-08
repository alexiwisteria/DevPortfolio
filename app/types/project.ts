type TimelineEntry = {
  task: string;
  dateCompleted: string;
  notes: string;
} & ({owner: string} | {});

export interface ProjectContent {
  projectName: string;
  projectManagers: {
    name: string;
    linkedin: string;
  }[];
  scrumMaster: {
    name: string;
    linkedin: string;
  };
  developers: {
    name: string;
    linkedin: string;
  }[];
  dates: {
    start: string;
    end: string;
  };
  background: string;
  objectives: string[];
  targetAudience: {
    primary: string;
    secondary: string;
  };
  projectSpecifics: Record<string, string>;
  timeline: TimelineEntry[];
  conclusion: Record<string, string>;
} 
// Project Types
export interface ProjectScores {
  transparency: number;
  collaboration: number;
  funding: number;
  engagement: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  scores: ProjectScores;
  url: string;
  lastUpdated: string;
}

// Category Types
export type Category = 
  | 'All'
  | 'Biology'
  | 'AI'
  | 'Materials Science'
  | 'Open Access Research'
  | 'Climate Science'
  | 'Blockchain for Science';

// Sorting Types
export type SortKey = keyof ProjectScores;

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// Data Source Types
export interface DataSource {
  name: string;
  url: string;
  type: 'github' | 'twitter' | 'arxiv' | 'hetu';
}

// Hetu Protocol Types
export interface HetuMetadata {
  projectId: number;
  scores: ProjectScores;
  timestamp: string;
  verificationHash: string;
} 
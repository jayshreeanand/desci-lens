import { Project, Category, SortKey } from '@/types';
import { searchGitHubProjects } from './github';
import { searchTwitterProjects } from './twitter';
import { searchArxivPapers } from './arxiv';
import { searchHetuProjects, storeProjectOnHetu } from './hetu';
import { calculateProjectScores, categorizeProject, generateProjectSummary } from './ai';

// Cache for projects to avoid repeated API calls
let projectsCache: Project[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

/**
 * Get all projects from all sources
 */
export async function getAllProjects(): Promise<Project[]> {
  // Check if cache is valid
  const now = Date.now();
  if (projectsCache.length > 0 && now - lastFetchTime < CACHE_DURATION) {
    return projectsCache;
  }

  try {
    // Fetch projects from all sources in parallel
    const [githubProjects, twitterProjects, arxivProjects, hetuProjects] = await Promise.all([
      searchGitHubProjects(),
      searchTwitterProjects(),
      searchArxivPapers(),
      searchHetuProjects()
    ]);

    // Combine all projects
    const allProjects = [
      ...githubProjects,
      ...twitterProjects,
      ...arxivProjects,
      ...hetuProjects
    ];

    // Remove duplicates (in a real implementation, you would have a more sophisticated deduplication logic)
    const uniqueProjects = Array.from(new Map(allProjects.map(project => [project.id, project])).values());

    // Update cache
    projectsCache = uniqueProjects;
    lastFetchTime = now;

    return uniqueProjects;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return projectsCache.length > 0 ? projectsCache : getMockProjects();
  }
}

/**
 * Filter projects by category
 */
export function filterProjectsByCategory(projects: Project[], category: Category): Project[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}

/**
 * Sort projects by score
 */
export function sortProjectsByScore(projects: Project[], sortKey: SortKey): Project[] {
  return [...projects].sort((a, b) => b.scores[sortKey] - a.scores[sortKey]);
}

/**
 * Add a new project
 */
export async function addProject(projectData: Partial<Project>): Promise<Project | null> {
  try {
    // Generate a unique ID
    const id = Date.now();

    // Use AI to categorize the project
    const category = await categorizeProject(projectData.description || '');

    // Use AI to calculate scores
    const scores = await calculateProjectScores(projectData);

    // Create the new project
    const newProject: Project = {
      id,
      name: projectData.name || 'Unnamed Project',
      description: projectData.description || 'No description provided',
      category,
      scores,
      url: projectData.url || '',
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    // Store the project on Hetu Protocol
    await storeProjectOnHetu(newProject);

    // Add to cache
    projectsCache = [newProject, ...projectsCache];

    return newProject;
  } catch (error) {
    console.error('Error adding project:', error);
    return null;
  }
}

/**
 * Get mock projects for demonstration
 */
function getMockProjects(): Project[] {
  return [
    {
      id: 1,
      name: 'Open Science Framework',
      description: 'A decentralized platform for open science research and collaboration.',
      category: 'Open Access Research',
      scores: {
        transparency: 85,
        collaboration: 92,
        funding: 78,
        engagement: 88
      },
      url: 'https://github.com/example/open-science-framework',
      lastUpdated: '2025-11-15'
    },
    {
      id: 2,
      name: 'BioDAO',
      description: 'A decentralized autonomous organization focused on funding and supporting biological research.',
      category: 'Biology',
      scores: {
        transparency: 90,
        collaboration: 85,
        funding: 95,
        engagement: 80
      },
      url: 'https://github.com/example/bio-dao',
      lastUpdated: '2025-11-10'
    },
    {
      id: 3,
      name: 'AI Research Commons',
      description: 'A collaborative platform for open AI research and model sharing.',
      category: 'AI',
      scores: {
        transparency: 95,
        collaboration: 88,
        funding: 75,
        engagement: 92
      },
      url: 'https://github.com/example/ai-research-commons',
      lastUpdated: '2025-11-12'
    }
  ];
} 
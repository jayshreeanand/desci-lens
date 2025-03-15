import axios from 'axios';
import { Project, ProjectScores } from '@/types';

// GitHub API endpoints
const GITHUB_API_BASE = 'https://api.github.com';
const SEARCH_REPOS_ENDPOINT = `${GITHUB_API_BASE}/search/repositories`;

// Keywords for searching DeSci projects
const DESCI_KEYWORDS = [
  'DeSci',
  'Decentralized Science',
  'Blockchain Research',
  'Open Science',
  'Science DAO'
];

/**
 * Search for DeSci projects on GitHub
 */
export async function searchGitHubProjects(): Promise<Project[]> {
  try {
    // Create search queries for each keyword
    const projectPromises = DESCI_KEYWORDS.map(async (keyword) => {
      const query = encodeURIComponent(`${keyword} in:name,description,readme language:javascript language:typescript language:python language:solidity`);
      const response = await axios.get(`${SEARCH_REPOS_ENDPOINT}?q=${query}&sort=stars&order=desc`);
      return response.data.items;
    });

    // Wait for all requests to complete
    const results = await Promise.all(projectPromises);
    
    // Flatten the results and remove duplicates
    const allRepos = results.flat();
    const uniqueRepos = Array.from(new Map(allRepos.map(repo => [repo.id, repo])).values());
    
    // Convert GitHub repos to our Project format
    const projects = uniqueRepos.map((repo, index) => {
      // Generate mock scores for now - in a real implementation, these would be calculated
      const scores: ProjectScores = {
        transparency: Math.floor(70 + Math.random() * 30),
        collaboration: Math.floor(70 + Math.random() * 30),
        funding: Math.floor(70 + Math.random() * 30),
        engagement: Math.floor(70 + Math.random() * 30)
      };

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        category: determineCategory(repo),
        scores,
        url: repo.html_url,
        lastUpdated: new Date(repo.updated_at).toISOString().split('T')[0]
      };
    });

    return projects;
  } catch (error) {
    console.error('Error searching GitHub projects:', error);
    return [];
  }
}

/**
 * Determine the category of a project based on its description and topics
 */
function determineCategory(repo: any): string {
  const description = (repo.description || '').toLowerCase();
  const topics = repo.topics || [];
  
  // Simple rule-based categorization - in a real implementation, this would use AI
  if (description.includes('biology') || description.includes('bio') || topics.includes('biology')) {
    return 'Biology';
  } else if (description.includes('ai') || description.includes('artificial intelligence') || topics.includes('ai')) {
    return 'AI';
  } else if (description.includes('materials') || topics.includes('materials-science')) {
    return 'Materials Science';
  } else if (description.includes('open access') || description.includes('open science') || topics.includes('open-access')) {
    return 'Open Access Research';
  } else if (description.includes('climate') || topics.includes('climate')) {
    return 'Climate Science';
  } else if (description.includes('blockchain') && (description.includes('science') || description.includes('research'))) {
    return 'Blockchain for Science';
  } else {
    return 'Open Access Research'; // Default category
  }
} 
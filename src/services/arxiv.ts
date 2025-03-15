import axios from 'axios';
import * as cheerio from 'cheerio';
import { Project, ProjectScores } from '@/types';

// ArXiv API endpoint
const ARXIV_API_URL = 'http://export.arxiv.org/api/query';

// Search terms for DeSci papers
const DESCI_SEARCH_TERMS = [
  'decentralized science',
  'blockchain research',
  'open science',
  'science dao',
  'decentralized research'
];

/**
 * Search for DeSci papers on ArXiv
 */
export async function searchArxivPapers(): Promise<Project[]> {
  try {
    // Create search queries for each term
    const paperPromises = DESCI_SEARCH_TERMS.map(async (term) => {
      const query = encodeURIComponent(`all:${term}`);
      const response = await axios.get(`${ARXIV_API_URL}?search_query=${query}&start=0&max_results=10`);
      return parseArxivResponse(response.data);
    });

    // Wait for all requests to complete
    const results = await Promise.all(paperPromises);
    
    // Flatten the results and remove duplicates
    const allPapers = results.flat();
    const uniquePapers = Array.from(new Map(allPapers.map(paper => [paper.id, paper])).values());
    
    return uniquePapers;
  } catch (error) {
    console.error('Error searching ArXiv papers:', error);
    return [];
  }
}

/**
 * Parse ArXiv API response XML
 */
function parseArxivResponse(xmlData: string): Project[] {
  try {
    // In a real implementation, you would parse the XML response
    // For now, return mock data
    return getMockArxivProjects();
  } catch (error) {
    console.error('Error parsing ArXiv response:', error);
    return [];
  }
}

/**
 * Generate mock ArXiv projects for demonstration
 */
function getMockArxivProjects(): Project[] {
  const mockProjects: Project[] = [
    {
      id: 2001,
      name: 'Decentralized Science: A New Paradigm for Scientific Research',
      description: 'This paper explores how blockchain technology can transform scientific research by enabling decentralized collaboration, funding, and peer review.',
      category: 'Blockchain for Science',
      scores: {
        transparency: 95,
        collaboration: 85,
        funding: 80,
        engagement: 90
      },
      url: 'https://arxiv.org/abs/2301.12345',
      lastUpdated: '2025-01-15'
    },
    {
      id: 2002,
      name: 'Open Science DAOs: Governance Models for Scientific Communities',
      description: 'An analysis of different governance models for Decentralized Autonomous Organizations (DAOs) in scientific research.',
      category: 'Open Access Research',
      scores: {
        transparency: 90,
        collaboration: 92,
        funding: 85,
        engagement: 88
      },
      url: 'https://arxiv.org/abs/2302.54321',
      lastUpdated: '2025-02-20'
    },
    {
      id: 2003,
      name: 'Blockchain-Based Verification of Scientific Results',
      description: 'A framework for using blockchain to verify and reproduce scientific results, enhancing research integrity.',
      category: 'Blockchain for Science',
      scores: {
        transparency: 98,
        collaboration: 80,
        funding: 75,
        engagement: 85
      },
      url: 'https://arxiv.org/abs/2303.67890',
      lastUpdated: '2025-03-10'
    }
  ];
  
  return mockProjects;
} 
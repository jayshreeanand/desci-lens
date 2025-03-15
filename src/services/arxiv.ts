import axios from 'axios';
import * as cheerio from 'cheerio';
import { Project, ProjectScores, Paper } from '@/types';
import { parseStringPromise } from 'xml2js';

// ArXiv API endpoint with CORS proxy
// Using a CORS proxy to avoid CORS issues when calling the arXiv API directly from the browser
const ARXIV_API_URL = 'https://cors-anywhere.herokuapp.com/http://export.arxiv.org/api/query';
// Fallback to direct API if CORS proxy fails
const DIRECT_ARXIV_API_URL = 'http://export.arxiv.org/api/query';

// Search terms for DeSci papers
const DESCI_SEARCH_TERMS = [
  'decentralized science',
  'blockchain research',
  'open science',
  'science dao',
  'decentralized research'
];

// arXiv categories relevant to DeSci
const DESCI_CATEGORIES = [
  'cs.DL', // Digital Libraries
  'cs.CY', // Computers and Society
  'q-bio', // Quantitative Biology
  'q-fin', // Quantitative Finance
  'physics.soc-ph', // Physics and Society
  'cs.CR', // Cryptography and Security
  'cs.AI', // Artificial Intelligence
  'cs.DB', // Databases
  'cs.DC', // Distributed Computing
  'cs.NE', // Neural and Evolutionary Computing
];

/**
 * Search for DeSci projects on ArXiv
 */
export async function searchArxivProjects(): Promise<Project[]> {
  try {
    // Create search queries for each term
    const paperPromises = DESCI_SEARCH_TERMS.map(async (term) => {
      const query = encodeURIComponent(`all:${term}`);
      const response = await axios.get(`${ARXIV_API_URL}?search_query=${query}&start=0&max_results=10`);
      return parseArxivProjectResponse(response.data);
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
 * Parse ArXiv API response XML for projects
 */
function parseArxivProjectResponse(xmlData: string): Project[] {
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

/**
 * Fetch papers from arXiv related to DeSci
 * Using the real arXiv API
 */
export async function fetchDesciPapers(): Promise<Paper[]> {
  try {
    // Create a search query for DeSci-related categories and terms
    const categoryQuery = DESCI_CATEGORIES.map(cat => `cat:${cat}`).join('+OR+');
    const termQueries = DESCI_SEARCH_TERMS.map(term => `all:"${encodeURIComponent(term)}"`).join('+OR+');
    
    // Combine category and term queries
    const searchQuery = `(${categoryQuery})+AND+(${termQueries})`;
    
    // Make the API request with error handling for CORS issues
    let response;
    try {
      // Try with CORS proxy first
      response = await axios.get(`${ARXIV_API_URL}?search_query=${searchQuery}&sortBy=submittedDate&sortOrder=descending&max_results=20`);
    } catch (corsError) {
      console.warn('CORS proxy failed, trying direct API call:', corsError);
      // Fall back to direct API call (may work in server-side rendering or if CORS is not an issue)
      response = await axios.get(`${DIRECT_ARXIV_API_URL}?search_query=${searchQuery}&sortBy=submittedDate&sortOrder=descending&max_results=20`);
    }
    
    // Parse the XML response
    return parseArxivResponse(response.data);
  } catch (error) {
    console.error('Error fetching arXiv papers:', error);
    // Fallback to mock data if API call fails
    return getMockPapers();
  }
}

/**
 * Search for papers in arXiv by query
 * @param query Search query
 */
export async function searchPapersByQuery(query: string): Promise<Paper[]> {
  try {
    if (!query) {
      return fetchDesciPapers();
    }
    
    // Encode the query for URL
    const encodedQuery = encodeURIComponent(query);
    
    // Make the API request with error handling for CORS issues
    let response;
    try {
      // Try with CORS proxy first
      response = await axios.get(`${ARXIV_API_URL}?search_query=all:${encodedQuery}&sortBy=relevance&max_results=20`);
    } catch (corsError) {
      console.warn('CORS proxy failed, trying direct API call:', corsError);
      // Fall back to direct API call
      response = await axios.get(`${DIRECT_ARXIV_API_URL}?search_query=all:${encodedQuery}&sortBy=relevance&max_results=20`);
    }
    
    // Parse the XML response
    return parseArxivResponse(response.data);
  } catch (error) {
    console.error('Error searching arXiv papers:', error);
    // Fallback to mock data if API call fails
    const mockPapers = getMockPapers();
    if (!query) return mockPapers;
    
    const lowerQuery = query.toLowerCase();
    return mockPapers.filter(paper => 
      paper.title.toLowerCase().includes(lowerQuery) || 
      paper.summary.toLowerCase().includes(lowerQuery) ||
      paper.authors.some(author => author.toLowerCase().includes(lowerQuery)) ||
      paper.categories.some(category => category.toLowerCase().includes(lowerQuery))
    );
  }
}

/**
 * Parse arXiv API XML response for papers
 */
async function parseArxivResponse(xmlData: string): Promise<Paper[]> {
  try {
    // Parse XML to JavaScript object
    const result = await parseStringPromise(xmlData, { explicitArray: false });
    
    // Extract entries from the feed
    const entries = result.feed.entry;
    
    // If there are no entries, return an empty array
    if (!entries) {
      return [];
    }
    
    // Convert to array if single entry
    const entriesArray = Array.isArray(entries) ? entries : [entries];
    
    // Map entries to Paper objects
    return entriesArray.map((entry: any) => {
      // Extract categories
      const categories = Array.isArray(entry.category) 
        ? entry.category.map((cat: any) => cat.$.term) 
        : [entry.category.$.term];
      
      // Extract authors
      const authors = Array.isArray(entry.author) 
        ? entry.author.map((author: any) => author.name) 
        : [entry.author.name];
      
      // Extract DOI if available
      const doi = entry['arxiv:doi'] ? entry['arxiv:doi']._ : undefined;
      
      // Create Paper object
      return {
        id: entry.id,
        title: entry.title.replace(/\\n/g, ' ').trim(),
        authors: authors,
        summary: entry.summary.replace(/\\n/g, ' ').trim(),
        publishedDate: entry.published,
        updatedDate: entry.updated,
        categories: categories,
        pdfUrl: entry.id.replace('abs', 'pdf'),
        arxivUrl: entry.id,
        doi: doi
      };
    });
  } catch (error) {
    console.error('Error parsing arXiv XML response:', error);
    // Fallback to mock data if parsing fails
    return getMockPapers();
  }
}

/**
 * Generate mock arXiv papers for demonstration
 * Used as fallback when API calls fail
 */
function getMockPapers(): Paper[] {
  const mockPapers: Paper[] = [
    {
      id: 'https://arxiv.org/abs/2305.12345',
      title: 'Decentralized Science: A New Paradigm for Scientific Research and Publishing',
      authors: ['Alice Johnson', 'Bob Smith', 'Carol Williams'],
      summary: 'This paper introduces the concept of Decentralized Science (DeSci) and explores how blockchain technology can transform scientific research, funding, and publishing. We propose a framework for implementing decentralized peer review, reputation systems, and funding mechanisms.',
      publishedDate: '2023-05-15T00:00:00Z',
      updatedDate: '2023-05-15T00:00:00Z',
      categories: ['cs.DL', 'cs.CY', 'cs.CR'],
      pdfUrl: 'https://arxiv.org/pdf/2305.12345.pdf',
      arxivUrl: 'https://arxiv.org/abs/2305.12345',
      doi: '10.1234/desci.2023.12345'
    },
    {
      id: 'https://arxiv.org/abs/2304.67890',
      title: 'Blockchain-Based Verification of Scientific Experiments and Data',
      authors: ['David Chen', 'Emma Rodriguez'],
      summary: 'We present a novel approach to scientific data verification using blockchain technology. Our system enables researchers to cryptographically prove the authenticity and integrity of experimental data, enhancing reproducibility and trust in scientific research.',
      publishedDate: '2023-04-20T00:00:00Z',
      updatedDate: '2023-04-22T00:00:00Z',
      categories: ['cs.CR', 'cs.DB', 'cs.DC'],
      pdfUrl: 'https://arxiv.org/pdf/2304.67890.pdf',
      arxivUrl: 'https://arxiv.org/abs/2304.67890',
      doi: '10.1234/desci.2023.67890'
    },
    {
      id: 'https://arxiv.org/abs/2303.54321',
      title: 'Tokenized Funding Models for Open Science Research',
      authors: ['Frank Lee', 'Grace Kim', 'Henry Patel'],
      summary: 'This paper examines how tokenization and decentralized autonomous organizations (DAOs) can create new funding models for scientific research. We analyze several case studies of science DAOs and propose best practices for governance, token economics, and impact assessment.',
      publishedDate: '2023-03-10T00:00:00Z',
      updatedDate: '2023-03-15T00:00:00Z',
      categories: ['cs.CY', 'q-fin', 'physics.soc-ph'],
      pdfUrl: 'https://arxiv.org/pdf/2303.54321.pdf',
      arxivUrl: 'https://arxiv.org/abs/2303.54321',
      doi: '10.1234/desci.2023.54321'
    },
    {
      id: 'https://arxiv.org/abs/2302.13579',
      title: 'Decentralized Peer Review: A Transparent Alternative to Traditional Scientific Publishing',
      authors: ['Irene Martinez', 'Jack Thompson'],
      summary: 'We propose a decentralized peer review system that addresses the limitations of traditional scientific publishing. Our approach uses smart contracts to manage the review process, incentivize quality reviews, and create an immutable record of reviewer contributions and manuscript versions.',
      publishedDate: '2023-02-25T00:00:00Z',
      updatedDate: '2023-02-28T00:00:00Z',
      categories: ['cs.DL', 'cs.CY'],
      pdfUrl: 'https://arxiv.org/pdf/2302.13579.pdf',
      arxivUrl: 'https://arxiv.org/abs/2302.13579',
      doi: '10.1234/desci.2023.13579'
    },
    {
      id: 'https://arxiv.org/abs/2301.24680',
      title: 'AI-Powered Analysis of Decentralized Scientific Communities',
      authors: ['Karen Wilson', 'Luis Garcia', 'Michael Brown'],
      summary: 'This study applies natural language processing and network analysis to examine the emerging decentralized science ecosystem. We identify key research themes, collaboration patterns, and funding flows within DeSci communities, revealing insights about this rapidly evolving field.',
      publishedDate: '2023-01-15T00:00:00Z',
      updatedDate: '2023-01-20T00:00:00Z',
      categories: ['cs.AI', 'cs.CY', 'cs.SI'],
      pdfUrl: 'https://arxiv.org/pdf/2301.24680.pdf',
      arxivUrl: 'https://arxiv.org/abs/2301.24680',
      doi: '10.1234/desci.2023.24680'
    }
  ];
  
  return mockPapers;
} 
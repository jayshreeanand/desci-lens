import axios from 'axios';
import * as cheerio from 'cheerio';
import { Project, ProjectScores, Paper } from '@/types';

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
 * Note: This is a mock implementation as arXiv API requires proper handling
 */
export async function fetchDesciPapers(): Promise<Paper[]> {
  try {
    // In a real implementation, you would use the arXiv API like this:
    // const response = await fetch(`http://export.arxiv.org/api/query?search_query=cat:${categories.join('+OR+cat:')}&sortBy=submittedDate&sortOrder=descending&max_results=20`);
    // const data = await response.text();
    // Then parse the XML response
    
    // For now, return mock data
    return getMockPapers();
  } catch (error) {
    console.error('Error fetching arXiv papers:', error);
    return [];
  }
}

/**
 * Search for papers in arXiv by query
 * @param query Search query
 */
export async function searchPapersByQuery(query: string): Promise<Paper[]> {
  try {
    // In a real implementation, you would use the arXiv API
    // const response = await fetch(`http://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(query)}&sortBy=relevance&max_results=20`);
    // const data = await response.text();
    // Then parse the XML response
    
    // For now, filter mock data based on the query
    const mockPapers = getMockPapers();
    if (!query) return mockPapers;
    
    const lowerQuery = query.toLowerCase();
    return mockPapers.filter(paper => 
      paper.title.toLowerCase().includes(lowerQuery) || 
      paper.summary.toLowerCase().includes(lowerQuery) ||
      paper.authors.some(author => author.toLowerCase().includes(lowerQuery)) ||
      paper.categories.some(category => category.toLowerCase().includes(lowerQuery))
    );
  } catch (error) {
    console.error('Error searching arXiv papers:', error);
    return [];
  }
}

/**
 * Generate mock arXiv papers for demonstration
 */
function getMockPapers(): Paper[] {
  const mockPapers: Paper[] = [
    {
      id: 'arxiv:2305.12345',
      title: 'Decentralized Science: A New Paradigm for Scientific Research and Publishing',
      authors: ['Alice Johnson', 'Bob Smith', 'Carol Williams'],
      summary: 'This paper introduces the concept of Decentralized Science (DeSci) and explores how blockchain technology can transform scientific research, funding, and publishing. We propose a framework for implementing decentralized peer review, reputation systems, and funding mechanisms.',
      publishedDate: '2025-05-15',
      updatedDate: '2025-05-15',
      categories: ['cs.DL', 'cs.CY', 'cs.CR'],
      pdfUrl: 'https://arxiv.org/pdf/2305.12345.pdf',
      arxivUrl: 'https://arxiv.org/abs/2305.12345',
      doi: '10.1234/desci.2025.12345'
    },
    {
      id: 'arxiv:2304.67890',
      title: 'Blockchain-Based Verification of Scientific Experiments and Data',
      authors: ['David Chen', 'Emma Rodriguez'],
      summary: 'We present a novel approach to scientific data verification using blockchain technology. Our system enables researchers to cryptographically prove the authenticity and integrity of experimental data, enhancing reproducibility and trust in scientific research.',
      publishedDate: '2025-04-20',
      updatedDate: '2025-04-22',
      categories: ['cs.CR', 'cs.DB', 'cs.DC'],
      pdfUrl: 'https://arxiv.org/pdf/2304.67890.pdf',
      arxivUrl: 'https://arxiv.org/abs/2304.67890',
      doi: '10.1234/desci.2025.67890'
    },
    {
      id: 'arxiv:2303.54321',
      title: 'Tokenized Funding Models for Open Science Research',
      authors: ['Frank Lee', 'Grace Kim', 'Henry Patel'],
      summary: 'This paper examines how tokenization and decentralized autonomous organizations (DAOs) can create new funding models for scientific research. We analyze several case studies of science DAOs and propose best practices for governance, token economics, and impact assessment.',
      publishedDate: '2025-03-10',
      updatedDate: '2025-03-15',
      categories: ['cs.CY', 'q-fin', 'physics.soc-ph'],
      pdfUrl: 'https://arxiv.org/pdf/2303.54321.pdf',
      arxivUrl: 'https://arxiv.org/abs/2303.54321',
      doi: '10.1234/desci.2025.54321'
    },
    {
      id: 'arxiv:2302.13579',
      title: 'Decentralized Peer Review: A Transparent Alternative to Traditional Scientific Publishing',
      authors: ['Irene Martinez', 'Jack Thompson'],
      summary: 'We propose a decentralized peer review system that addresses the limitations of traditional scientific publishing. Our approach uses smart contracts to manage the review process, incentivize quality reviews, and create an immutable record of reviewer contributions and manuscript versions.',
      publishedDate: '2025-02-25',
      updatedDate: '2025-02-28',
      categories: ['cs.DL', 'cs.CY'],
      pdfUrl: 'https://arxiv.org/pdf/2302.13579.pdf',
      arxivUrl: 'https://arxiv.org/abs/2302.13579',
      doi: '10.1234/desci.2025.13579'
    },
    {
      id: 'arxiv:2301.24680',
      title: 'AI-Powered Analysis of Decentralized Scientific Communities',
      authors: ['Karen Wilson', 'Luis Garcia', 'Michael Brown'],
      summary: 'This study applies natural language processing and network analysis to examine the emerging decentralized science ecosystem. We identify key research themes, collaboration patterns, and funding flows within DeSci communities, revealing insights about this rapidly evolving field.',
      publishedDate: '2025-01-15',
      updatedDate: '2025-01-20',
      categories: ['cs.AI', 'cs.CY', 'cs.SI'],
      pdfUrl: 'https://arxiv.org/pdf/2301.24680.pdf',
      arxivUrl: 'https://arxiv.org/abs/2301.24680',
      doi: '10.1234/desci.2025.24680'
    },
    {
      id: 'arxiv:2212.97531',
      title: 'Open Data Commons: A Blockchain Framework for Scientific Data Sharing',
      authors: ['Nina Patel', 'Oscar Martinez'],
      summary: 'We introduce Open Data Commons, a blockchain-based framework that enables scientists to share research data while maintaining control over usage rights and receiving attribution. The system implements a novel incentive mechanism that rewards data sharing while protecting intellectual property.',
      publishedDate: '2024-12-10',
      updatedDate: '2024-12-15',
      categories: ['cs.DB', 'cs.DC', 'cs.CR'],
      pdfUrl: 'https://arxiv.org/pdf/2212.97531.pdf',
      arxivUrl: 'https://arxiv.org/abs/2212.97531',
      doi: '10.1234/desci.2024.97531'
    },
    {
      id: 'arxiv:2211.86420',
      title: 'Genomic Data Sovereignty in the Age of Blockchain',
      authors: ['Patricia Lee', 'Quentin Wright', 'Rachel Kim'],
      summary: 'This paper addresses the challenges of genomic data ownership and privacy in decentralized research environments. We propose a blockchain-based system that allows individuals to maintain sovereignty over their genomic data while selectively sharing it for research purposes.',
      publishedDate: '2024-11-20',
      updatedDate: '2024-11-25',
      categories: ['q-bio', 'cs.CR', 'cs.CY'],
      pdfUrl: 'https://arxiv.org/pdf/2211.86420.pdf',
      arxivUrl: 'https://arxiv.org/abs/2211.86420',
      doi: '10.1234/desci.2024.86420'
    },
    {
      id: 'arxiv:2210.75309',
      title: 'NFTs for Scientific Publishing: Monetization Models and Copyright Implications',
      authors: ['Samuel Johnson', 'Tina Rodriguez'],
      summary: 'We explore the use of non-fungible tokens (NFTs) in scientific publishing, analyzing potential monetization models and copyright implications. Our research examines how NFTs can create new revenue streams for researchers while promoting open access to scientific knowledge.',
      publishedDate: '2024-10-05',
      updatedDate: '2024-10-10',
      categories: ['cs.DL', 'cs.CY', 'cs.CR'],
      pdfUrl: 'https://arxiv.org/pdf/2210.75309.pdf',
      arxivUrl: 'https://arxiv.org/abs/2210.75309',
      doi: '10.1234/desci.2024.75309'
    },
    {
      id: 'arxiv:2209.64208',
      title: 'Decentralized Autonomous Research Teams (DARTs): Structure, Governance, and Outcomes',
      authors: ['Uma Patel', 'Victor Martinez', 'Wendy Chen'],
      summary: 'This paper presents a comprehensive analysis of Decentralized Autonomous Research Teams (DARTs) in scientific research. We examine their organizational structure, governance mechanisms, funding approaches, and research outcomes, providing insights for future implementations.',
      publishedDate: '2024-09-15',
      updatedDate: '2024-09-20',
      categories: ['cs.CY', 'physics.soc-ph'],
      pdfUrl: 'https://arxiv.org/pdf/2209.64208.pdf',
      arxivUrl: 'https://arxiv.org/abs/2209.64208',
      doi: '10.1234/desci.2024.64208'
    },
    {
      id: 'arxiv:2208.53197',
      title: 'Climate Science on the Blockchain: Transparent Data Collection and Analysis',
      authors: ['Xavier Johnson', 'Yasmine Ali'],
      summary: 'We demonstrate how blockchain technology can enhance transparency and trust in climate science data collection and analysis. Our approach uses smart contracts to verify data provenance and integrity, addressing concerns about data manipulation in climate research.',
      publishedDate: '2024-08-10',
      updatedDate: '2024-08-15',
      categories: ['physics.soc-ph', 'cs.CY', 'cs.DB'],
      pdfUrl: 'https://arxiv.org/pdf/2208.53197.pdf',
      arxivUrl: 'https://arxiv.org/abs/2208.53197',
      doi: '10.1234/desci.2024.53197'
    }
  ];
  
  return mockPapers;
}

/**
 * Parse arXiv API XML response for papers
 */
function parsePaperResponse(xmlData: string): Paper[] {
  // This is a placeholder for the actual implementation
  // In a real app, you would use a XML parser to extract paper information
  
  return [];
} 
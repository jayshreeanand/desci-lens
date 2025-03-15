import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import { ApiResponse, Paper } from '@/types';

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
 * GET handler for fetching arXiv papers
 * Optional query parameter: q (search query)
 */
export async function GET(request: Request) {
  try {
    // Get search query from URL if present
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    let papers: Paper[];
    
    if (query) {
      // Search for papers matching the query
      papers = await searchPapersByQuery(query);
    } else {
      // Fetch default DeSci papers
      papers = await fetchDesciPapers();
    }
    
    // Return the papers as JSON
    const response: ApiResponse<Paper[]> = {
      success: true,
      data: papers
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in arXiv API route:', error);
    
    // Return error response
    const errorResponse: ApiResponse<Paper[]> = {
      success: false,
      data: [],
      error: 'Failed to fetch arXiv papers'
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * Fetch papers from arXiv related to DeSci
 */
async function fetchDesciPapers(): Promise<Paper[]> {
  try {
    // Create a search query for DeSci-related categories and terms
    const categoryQuery = DESCI_CATEGORIES.map(cat => `cat:${cat}`).join('+OR+');
    const termQueries = DESCI_SEARCH_TERMS.map(term => `all:"${encodeURIComponent(term)}"`).join('+OR+');
    
    // Combine category and term queries
    const searchQuery = `(${categoryQuery})+AND+(${termQueries})`;
    
    // Make the API request
    const response = await axios.get(`${ARXIV_API_URL}?search_query=${searchQuery}&sortBy=submittedDate&sortOrder=descending&max_results=20`);
    
    // Parse the XML response
    return parseArxivResponse(response.data);
  } catch (error) {
    console.error('Error fetching arXiv papers:', error);
    // Return empty array on error
    return [];
  }
}

/**
 * Search for papers in arXiv by query
 * @param query Search query
 */
async function searchPapersByQuery(query: string): Promise<Paper[]> {
  try {
    if (!query) {
      return fetchDesciPapers();
    }
    
    // Encode the query for URL
    const encodedQuery = encodeURIComponent(query);
    
    // Make the API request
    const response = await axios.get(`${ARXIV_API_URL}?search_query=all:${encodedQuery}&sortBy=relevance&max_results=20`);
    
    // Parse the XML response
    return parseArxivResponse(response.data);
  } catch (error) {
    console.error('Error searching arXiv papers:', error);
    // Return empty array on error
    return [];
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
    // Return empty array on error
    return [];
  }
} 
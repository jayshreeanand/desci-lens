import { NextResponse } from 'next/server';
import { fetchDesciPapers, searchPapersByQuery } from '@/services/arxiv';
import { ApiResponse, Paper } from '@/types';

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
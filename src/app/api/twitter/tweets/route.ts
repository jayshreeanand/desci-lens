import { NextResponse } from 'next/server';
import { fetchDesciTweets } from '@/services/twitter';
import { ApiResponse } from '@/types';

/**
 * API route to fetch tweets with DeSci hashtags
 * GET /api/twitter/tweets
 */
export async function GET() {
  try {
    // Fetch tweets from the twitter service
    const tweets = await fetchDesciTweets();
    
    return NextResponse.json({
      success: true,
      data: tweets
    } as ApiResponse<any>, { status: 200 });
  } catch (error) {
    console.error('Error fetching DeSci tweets:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch DeSci tweets'
    } as ApiResponse<null>, { status: 500 });
  }
} 
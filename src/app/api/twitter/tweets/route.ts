import { NextResponse } from 'next/server';
import { Tweet } from '@/types';

// Mock data for demonstration purposes
// In a real application, this would be fetched from Twitter API
const mockTweets: Tweet[] = [
  {
    id: '1',
    text: 'Excited to announce our new paper on decentralized science infrastructure! #DeSci #BlockchainResearch',
    createdAt: '2023-05-15T14:30:00Z',
    username: 'desci_labs',
    displayName: 'DeSci Labs',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1498241786741288963/efs2Nq2__400x400.jpg',
    likes: 124,
    retweets: 45,
    hashtags: ['#DeSci', '#BlockchainResearch'],
    url: 'https://twitter.com/desci_labs/status/1'
  },
  {
    id: '2',
    text: 'Just published our research on open peer review systems using blockchain technology. Read it here: https://example.com/paper #OpenScience #DeSci',
    createdAt: '2023-05-14T09:15:00Z',
    username: 'openscience',
    displayName: 'Open Science Foundation',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1237444160/openscience_400x400.jpg',
    likes: 89,
    retweets: 32,
    hashtags: ['#OpenScience', '#DeSci'],
    url: 'https://twitter.com/openscience/status/2'
  },
  {
    id: '3',
    text: 'How decentralized science is transforming research funding models. Thread 🧵 #DecentralizedScience #ScienceDAO',
    createdAt: '2023-05-13T18:45:00Z',
    username: 'sciencedao',
    displayName: 'Science DAO',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1485301218104221698/7JQsZZ_i_400x400.jpg',
    likes: 156,
    retweets: 67,
    hashtags: ['#DecentralizedScience', '#ScienceDAO'],
    url: 'https://twitter.com/sciencedao/status/3'
  },
  {
    id: '4',
    text: 'Our latest research on using NFTs for scientific publishing is now available. We are revolutionizing how scientists share and get credit for their work! #DeSci #BlockchainResearch',
    createdAt: '2023-05-12T11:20:00Z',
    username: 'researchdao',
    displayName: 'Research DAO',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1485301218104221698/7JQsZZ_i_400x400.jpg',
    likes: 78,
    retweets: 23,
    hashtags: ['#DeSci', '#BlockchainResearch'],
    url: 'https://twitter.com/researchdao/status/4'
  },
  {
    id: '5',
    text: 'Join our webinar on how decentralized science is democratizing access to research funding. Register now: https://example.com/webinar #OpenScience #DecentralizedScience',
    createdAt: '2023-05-11T15:10:00Z',
    username: 'sciencealliance',
    displayName: 'Science Alliance',
    profileImageUrl: 'https://pbs.twimg.com/profile_images/1237444160/openscience_400x400.jpg',
    likes: 45,
    retweets: 19,
    hashtags: ['#OpenScience', '#DecentralizedScience'],
    url: 'https://twitter.com/sciencealliance/status/5'
  }
];

/**
 * API route to fetch tweets with DeSci hashtags
 * GET /api/twitter/tweets
 */
export async function GET() {
  try {
    // In a real application, you would fetch tweets from Twitter API here
    // For now, we're using mock data
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      data: mockTweets
    });
  } catch (error: any) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch tweets'
      },
      { status: 500 }
    );
  }
} 
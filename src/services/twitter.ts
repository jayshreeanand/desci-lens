import { TwitterApi } from 'twitter-api-v2';
import { Project, ProjectScores, Tweet } from '@/types';

// Twitter hashtags for searching DeSci projects
const DESCI_HASHTAGS = [
  '#DeSci',
  '#DecentralizedScience',
  '#BlockchainResearch',
  '#OpenScience',
  '#ScienceDAO'
];

/**
 * Search for DeSci projects on Twitter/X
 * Note: This is a mock implementation as Twitter API requires authentication
 */
export async function searchTwitterProjects(): Promise<Project[]> {
  try {
    // In a real implementation, you would use the Twitter API like this:
    // const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
    // const tweets = await client.v2.search(hashtag, { max_results: 100 });
    
    // For now, return mock data
    return getMockTwitterProjects();
  } catch (error) {
    console.error('Error searching Twitter projects:', error);
    return [];
  }
}

/**
 * Fetch tweets with DeSci hashtags
 * Note: This is a mock implementation as Twitter API requires authentication
 */
export async function fetchDesciTweets(): Promise<Tweet[]> {
  try {
    // In a real implementation, you would use the Twitter API like this:
    // const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
    // const tweets = await Promise.all(
    //   DESCI_HASHTAGS.map(hashtag => 
    //     client.v2.search(`${hashtag} -is:retweet`, { 
    //       max_results: 10,
    //       expansions: ['author_id'],
    //       'tweet.fields': ['created_at', 'public_metrics'],
    //       'user.fields': ['profile_image_url', 'name', 'username']
    //     })
    //   )
    // );
    
    // For now, return mock data
    return getMockTweets();
  } catch (error) {
    console.error('Error fetching DeSci tweets:', error);
    return [];
  }
}

/**
 * Generate mock Twitter projects for demonstration
 */
function getMockTwitterProjects(): Project[] {
  const mockProjects: Project[] = [
    {
      id: 1001,
      name: 'OpenScienceDAO',
      description: 'A decentralized autonomous organization focused on funding open science research projects.',
      category: 'Open Access Research',
      scores: {
        transparency: 92,
        collaboration: 88,
        funding: 95,
        engagement: 90
      },
      url: 'https://twitter.com/OpenScienceDAO',
      lastUpdated: '2025-11-15'
    },
    {
      id: 1002,
      name: 'BioGenesis',
      description: 'Decentralized platform for collaborative biological research and data sharing.',
      category: 'Biology',
      scores: {
        transparency: 85,
        collaboration: 93,
        funding: 80,
        engagement: 87
      },
      url: 'https://twitter.com/BioGenesis',
      lastUpdated: '2025-11-14'
    },
    {
      id: 1003,
      name: 'ClimateChain',
      description: 'Using blockchain to verify and share climate research data globally.',
      category: 'Climate Science',
      scores: {
        transparency: 90,
        collaboration: 85,
        funding: 82,
        engagement: 88
      },
      url: 'https://twitter.com/ClimateChain',
      lastUpdated: '2025-11-12'
    }
  ];
  
  return mockProjects;
}

/**
 * Generate mock tweets for demonstration
 */
function getMockTweets(): Tweet[] {
  const mockTweets: Tweet[] = [
    {
      id: '1',
      text: 'Excited to announce our new #DeSci project that aims to revolutionize how researchers collaborate on genomic data analysis! #OpenScience #BlockchainResearch',
      username: 'biodesci',
      displayName: 'BioDesci Project',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/boy-snow-hoodie',
      createdAt: '2025-11-15T14:30:00Z',
      hashtags: ['#DeSci', '#OpenScience', '#BlockchainResearch'],
      url: 'https://twitter.com/biodesci/status/1',
      likes: 128,
      retweets: 45
    },
    {
      id: '2',
      text: 'Our latest paper on decentralized peer review systems is now available! We show how blockchain can make scientific review more transparent and fair. #DeSci #DecentralizedScience',
      username: 'opensciencedao',
      displayName: 'Open Science DAO',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man',
      createdAt: '2025-11-14T09:15:00Z',
      hashtags: ['#DeSci', '#DecentralizedScience'],
      url: 'https://twitter.com/opensciencedao/status/2',
      likes: 95,
      retweets: 32
    },
    {
      id: '3',
      text: 'Join our community call tomorrow to discuss how we can use #DeSci principles to improve climate data sharing and verification. Everyone welcome! #OpenScience #ClimateAction',
      username: 'climatechain',
      displayName: 'Climate Chain Initiative',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains',
      createdAt: '2025-11-13T18:45:00Z',
      hashtags: ['#DeSci', '#OpenScience', '#ClimateAction'],
      url: 'https://twitter.com/climatechain/status/3',
      likes: 76,
      retweets: 28
    },
    {
      id: '4',
      text: 'How can we incentivize more scientists to share their research data openly? Our new token model might be the answer. Check out our latest blog post! #DeSci #ScienceDAO #BlockchainResearch',
      username: 'descinetwork',
      displayName: 'DeSci Network',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/kitchen-bar',
      createdAt: '2025-11-12T11:20:00Z',
      hashtags: ['#DeSci', '#ScienceDAO', '#BlockchainResearch'],
      url: 'https://twitter.com/descinetwork/status/4',
      likes: 112,
      retweets: 41
    },
    {
      id: '5',
      text: 'Decentralized science is not just about blockchain - it\'s about rethinking how we fund, conduct, and share research. Our vision for the future of #DeSci #OpenScience',
      username: 'sciencefuture',
      displayName: 'Future of Science',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/accessories-bag',
      createdAt: '2025-11-11T15:10:00Z',
      hashtags: ['#DeSci', '#OpenScience'],
      url: 'https://twitter.com/sciencefuture/status/5',
      likes: 89,
      retweets: 37
    }
  ];
  
  return mockTweets;
}

/**
 * Extract project information from tweets
 * This would be used in a real implementation
 */
function extractProjectInfo(tweets: any[]): Project[] {
  // This is a placeholder for the actual implementation
  // In a real app, you would use NLP or AI to extract project information from tweets
  
  return [];
} 
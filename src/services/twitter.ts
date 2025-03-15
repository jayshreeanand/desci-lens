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
    },
    {
      id: '6',
      text: 'Just published: "Blockchain-based Verification of Scientific Experiments" - a framework for ensuring reproducibility in research. Link in bio! #DeSci #BlockchainResearch #ReproducibleScience',
      username: 'scienceblocks',
      displayName: 'Science Blocks',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/bicycle',
      createdAt: '2025-11-10T10:25:00Z',
      hashtags: ['#DeSci', '#BlockchainResearch', '#ReproducibleScience'],
      url: 'https://twitter.com/scienceblocks/status/6',
      likes: 143,
      retweets: 52
    },
    {
      id: '7',
      text: 'We\'re thrilled to announce our $5M funding round to build decentralized infrastructure for open access publishing! No more paywalls, no more gatekeepers. #DeSci #OpenAccess #ScienceDAO',
      username: 'openaccess_dao',
      displayName: 'Open Access DAO',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/people/jazz',
      createdAt: '2025-11-09T16:40:00Z',
      hashtags: ['#DeSci', '#OpenAccess', '#ScienceDAO'],
      url: 'https://twitter.com/openaccess_dao/status/7',
      likes: 215,
      retweets: 87
    },
    {
      id: '8',
      text: 'The problem with traditional science funding: 1) Slow 2) Bureaucratic 3) Risk-averse. Our solution: community-driven funding pools with transparent allocation. #DeSci #DecentralizedScience',
      username: 'sciencefund',
      displayName: 'DeSci Fund',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/food/spices',
      createdAt: '2025-11-08T13:15:00Z',
      hashtags: ['#DeSci', '#DecentralizedScience'],
      url: 'https://twitter.com/sciencefund/status/8',
      likes: 98,
      retweets: 42
    },
    {
      id: '9',
      text: 'Announcing our new partnership with @GenomicsDAO to create the first decentralized genomic data marketplace. Empowering individuals to own and monetize their genetic data. #DeSci #Genomics #BlockchainResearch',
      username: 'biohack_labs',
      displayName: 'BioHack Labs',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/cat',
      createdAt: '2025-11-07T09:30:00Z',
      hashtags: ['#DeSci', '#Genomics', '#BlockchainResearch'],
      url: 'https://twitter.com/biohack_labs/status/9',
      likes: 176,
      retweets: 63
    },
    {
      id: '10',
      text: 'Why should scientists care about #DeSci? 1) Direct funding 2) Ownership of IP 3) Community governance 4) Open collaboration 5) Transparent peer review. The future of research is decentralized! #OpenScience',
      username: 'desci_advocate',
      displayName: 'DeSci Advocate',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/reindeer',
      createdAt: '2025-11-06T17:20:00Z',
      hashtags: ['#DeSci', '#OpenScience'],
      url: 'https://twitter.com/desci_advocate/status/10',
      likes: 132,
      retweets: 58
    },
    {
      id: '11',
      text: 'Our new paper demonstrates how NFTs can be used to fund rare disease research, with 50% of proceeds going directly to patient advocacy groups. Published today in @NatureJournal #DeSci #NFTs #RareDiseases',
      username: 'nft4science',
      displayName: 'NFT for Science',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/cloudinary-group',
      createdAt: '2025-11-05T11:45:00Z',
      hashtags: ['#DeSci', '#NFTs', '#RareDiseases'],
      url: 'https://twitter.com/nft4science/status/11',
      likes: 187,
      retweets: 76
    },
    {
      id: '12',
      text: 'Decentralized autonomous research teams (DARTs) are changing how we collaborate across borders. No institutional barriers, just pure scientific exploration. Our experience after 6 months: #DeSci #DecentralizedScience #ScienceDAO',
      username: 'dart_research',
      displayName: 'DART Research',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/leather-bag-gray',
      createdAt: '2025-11-04T14:10:00Z',
      hashtags: ['#DeSci', '#DecentralizedScience', '#ScienceDAO'],
      url: 'https://twitter.com/dart_research/status/12',
      likes: 109,
      retweets: 43
    },
    {
      id: '13',
      text: 'Climate data should be a public good. We\'re building a decentralized repository of climate measurements that cannot be tampered with or censored. Join our mission! #DeSci #ClimateAction #OpenData',
      username: 'climate_data_dao',
      displayName: 'Climate Data DAO',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/beach-boat',
      createdAt: '2025-11-03T08:50:00Z',
      hashtags: ['#DeSci', '#ClimateAction', '#OpenData'],
      url: 'https://twitter.com/climate_data_dao/status/13',
      likes: 156,
      retweets: 67
    },
    {
      id: '14',
      text: 'The results are in! Our community-driven grant program has funded 15 innovative #DeSci projects this quarter, focusing on open-source lab equipment and accessible research tools. #OpenScience #ScienceDAO',
      username: 'desci_grants',
      displayName: 'DeSci Grants',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/food/dessert',
      createdAt: '2025-11-02T19:25:00Z',
      hashtags: ['#DeSci', '#OpenScience', '#ScienceDAO'],
      url: 'https://twitter.com/desci_grants/status/14',
      likes: 124,
      retweets: 49
    },
    {
      id: '15',
      text: 'Peer review shouldn\'t be hidden behind closed doors. Our transparent review protocol launches next month, with reviewers earning reputation tokens for quality feedback. #DeSci #OpenPeerReview #BlockchainResearch',
      username: 'open_review',
      displayName: 'Open Review Protocol',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/shoes',
      createdAt: '2025-11-01T12:35:00Z',
      hashtags: ['#DeSci', '#OpenPeerReview', '#BlockchainResearch'],
      url: 'https://twitter.com/open_review/status/15',
      likes: 118,
      retweets: 51
    },
    {
      id: '16',
      text: 'Announcing our integration with @IPFS to create permanent, uncensorable archives of scientific datasets. Your research data will be available forever, regardless of institutional changes. #DeSci #IPFS #OpenData',
      username: 'eternal_science',
      displayName: 'Eternal Science',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/animals/three-dogs',
      createdAt: '2025-10-31T15:55:00Z',
      hashtags: ['#DeSci', '#IPFS', '#OpenData'],
      url: 'https://twitter.com/eternal_science/status/16',
      likes: 142,
      retweets: 59
    },
    {
      id: '17',
      text: 'We\'ve just tokenized our research lab! Scientists can now own a piece of our infrastructure and vote on research directions. Science owned by scientists, not institutions. #DeSci #ScienceDAO #DecentralizedScience',
      username: 'tokenized_lab',
      displayName: 'Tokenized Lab',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/food/pot-mussels',
      createdAt: '2025-10-30T10:15:00Z',
      hashtags: ['#DeSci', '#ScienceDAO', '#DecentralizedScience'],
      url: 'https://twitter.com/tokenized_lab/status/17',
      likes: 167,
      retweets: 72
    },
    {
      id: '18',
      text: 'Traditional journals take up to 70% of the value in scientific publishing. Our model returns 95% to the researchers and reviewers who create the value. Join the revolution! #DeSci #OpenAccess #BlockchainResearch',
      username: 'fair_science',
      displayName: 'Fair Science Journal',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/analog-classic',
      createdAt: '2025-10-29T16:40:00Z',
      hashtags: ['#DeSci', '#OpenAccess', '#BlockchainResearch'],
      url: 'https://twitter.com/fair_science/status/18',
      likes: 189,
      retweets: 81
    },
    {
      id: '19',
      text: 'Our AI + blockchain platform has successfully predicted protein structures with 98% accuracy, and all models are available as public goods on our decentralized repository. #DeSci #AI #OpenScience',
      username: 'ai_protein',
      displayName: 'AI Protein Project',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/food/fish-vegetables',
      createdAt: '2025-10-28T13:20:00Z',
      hashtags: ['#DeSci', '#AI', '#OpenScience'],
      url: 'https://twitter.com/ai_protein/status/19',
      likes: 203,
      retweets: 94
    },
    {
      id: '20',
      text: 'Citizen science meets blockchain: our new platform allows anyone to contribute computing power to scientific projects and earn tokens. Already supporting 5 major research initiatives! #DeSci #CitizenScience #BlockchainResearch',
      username: 'compute4science',
      displayName: 'Compute for Science',
      profileImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/girl-urban-view',
      createdAt: '2025-10-27T09:05:00Z',
      hashtags: ['#DeSci', '#CitizenScience', '#BlockchainResearch'],
      url: 'https://twitter.com/compute4science/status/20',
      likes: 135,
      retweets: 57
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
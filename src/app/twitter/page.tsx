'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the TwitterFeed component with client-side rendering
const TwitterFeed = dynamic(() => import('@/components/TwitterFeed'), {
  ssr: false,
  loading: () => (
    <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading Twitter feed...</div>
    </div>
  ),
});

export default function TwitterPage() {
  // Expanded list of popular hashtags
  const popularHashtags = [
    '#DeSci', 
    '#OpenScience', 
    '#BlockchainResearch', 
    '#DecentralizedScience', 
    '#ScienceDAO',
    '#OpenAccess',
    '#OpenData',
    '#ClimateAction',
    '#Genomics',
    '#NFTs',
    '#IPFS',
    '#ReproducibleScience',
    '#CitizenScience',
    '#OpenPeerReview',
    '#RareDiseases',
    '#AI'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">DeSciLens</Link>
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Projects
              </Link>
              <Link href="/twitter" className="px-3 py-2 rounded-md text-sm font-medium bg-primary-100 text-primary-700">
                Twitter Feed
              </Link>
              <Link href="/ai-features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                AI Features
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">DeSci Twitter Feed</h1>
            <p className="mt-2 text-lg text-gray-600">
              Stay updated with the latest discussions and announcements in the decentralized science community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                <TwitterFeed />
              </Suspense>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About DeSci</h2>
                <p className="text-gray-600 mb-4">
                  Decentralized Science (DeSci) is a movement that aims to make scientific research more accessible, 
                  transparent, and collaborative using blockchain technology and decentralized networks.
                </p>
                <Link href="/about" className="text-primary-600 font-medium hover:text-primary-800">
                  Learn more about DeSci →
                </Link>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Hashtags</h2>
                <div className="flex flex-wrap gap-2">
                  {popularHashtags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">DeSci Resources</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="https://ethereum.org/en/desci/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      Ethereum DeSci Portal
                    </a>
                  </li>
                  <li>
                    <a href="https://desci.world/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      DeSci World
                    </a>
                  </li>
                  <li>
                    <a href="https://www.desci.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      DeSci Labs
                    </a>
                  </li>
                  <li>
                    <a href="https://www.desci.foundation/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      DeSci Foundation
                    </a>
                  </li>
                  <li>
                    <a href="https://ipfs.tech/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      IPFS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.researchhub.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
                      ResearchHub
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Latest DeSci News</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="text-sm font-semibold text-gray-900">New Funding Models for Research</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      How DAOs are revolutionizing scientific funding and enabling more innovative research.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-sm font-semibold text-gray-900">Open Access Publishing on the Blockchain</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      Decentralized journals are eliminating gatekeepers and making research freely available.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-sm font-semibold text-gray-900">Data Ownership in Genomics</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      How blockchain is enabling individuals to control and monetize their own genetic data.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-400">
              &copy; 2025 DeSciLens. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
import ArxivPapers from '@/components/ArxivPapers';
import Link from 'next/link';

export const metadata = {
  title: 'DeSci Lens | arXiv Papers',
  description: 'Explore scientific papers related to decentralized science from arXiv.',
};

export default function ArxivPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">DeSciLens</span>
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Projects
              </Link>
              <Link href="/twitter" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Twitter Feed
              </Link>
              <Link href="/arxiv" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-100">
                Research Papers
              </Link>
              <Link href="/ai-features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                AI Features
              </Link>
              <Link href="/ai-test" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                AI Test
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">DeSci Research Papers</h1>
          <p className="text-gray-600">
            Explore the latest research papers on decentralized science from arXiv.
            Search for specific topics or browse through recent publications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArxivPapers />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">About arXiv</h2>
              <p className="text-sm text-gray-600 mb-4">
                arXiv is an open-access repository of electronic preprints and postprints approved for posting after moderation, but not peer review.
              </p>
              <p className="text-sm text-gray-600">
                This collection focuses on papers related to decentralized science, blockchain in research, and open science initiatives.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
              <ul className="space-y-2">
                <li className="text-sm text-blue-600 hover:underline cursor-pointer">cs.DL - Digital Libraries</li>
                <li className="text-sm text-blue-600 hover:underline cursor-pointer">cs.CY - Computers and Society</li>
                <li className="text-sm text-blue-600 hover:underline cursor-pointer">cs.CR - Cryptography and Security</li>
                <li className="text-sm text-blue-600 hover:underline cursor-pointer">q-bio - Quantitative Biology</li>
                <li className="text-sm text-blue-600 hover:underline cursor-pointer">physics.soc-ph - Physics and Society</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">DeSci Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://ethereum.org/en/desci/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Ethereum DeSci Portal
                  </a>
                </li>
                <li>
                  <a 
                    href="https://desci.world/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    DeSci World
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.desci.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    DeSci Labs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-auto">
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
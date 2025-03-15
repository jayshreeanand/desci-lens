'use client';

import { useState, useEffect } from 'react';
import { Paper } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface ArxivPapersProps {
  limit?: number;
  showSearch?: boolean;
}

export default function ArxivPapers({ limit, showSearch = true }: ArxivPapersProps) {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);

  // Fetch papers on component mount
  useEffect(() => {
    fetchPapers();
  }, []);

  // Function to fetch papers from API
  const fetchPapers = async (query?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const url = query 
        ? `/api/arxiv?q=${encodeURIComponent(query)}`
        : '/api/arxiv';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch papers');
      }
      
      setPapers(data.data);
    } catch (err) {
      console.error('Error fetching arXiv papers:', err);
      setError('Failed to load papers. Please try again later.');
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  // Handle search
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearching(true);
    fetchPapers(searchQuery);
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Extract arXiv ID from URL
  const extractArxivId = (url: string): string => {
    const match = url.match(/abs\/([^\/]+)$/);
    return match ? match[1] : url;
  };

  // Limit the number of papers if specified
  const displayPapers = limit ? papers.slice(0, limit) : papers;

  return (
    <div className="space-y-6">
      {/* Search bar */}
      {showSearch && (
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search arXiv papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            disabled={searching}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {searching ? 'Searching...' : 'Search'}
          </button>
        </form>
      )}

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div className="space-y-4">
          {[...Array(limit || 3)].map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 overflow-hidden">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-20 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Papers list */}
      {!loading && displayPapers.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No papers found. Try a different search term.
        </div>
      )}

      <div className="space-y-4">
        {displayPapers.map((paper) => (
          <div key={paper.id} className="border border-gray-200 rounded-lg p-4 overflow-hidden hover:shadow-md transition-shadow">
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{paper.title}</h3>
              <p className="text-sm text-gray-600">
                {paper.authors.join(', ')}
              </p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-3">
                {paper.summary}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.categories.map((category) => (
                <span key={category} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {category}
                </span>
              ))}
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published: {formatDate(paper.publishedDate)}</span>
              {paper.updatedDate !== paper.publishedDate && (
                <span className="ml-4">Updated: {formatDate(paper.updatedDate)}</span>
              )}
            </div>
            
            <div className="flex justify-between">
              <Link 
                href={paper.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                PDF
              </Link>
              
              <Link 
                href={paper.arxivUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                View on arXiv ({extractArxivId(paper.arxivUrl)})
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { Paper } from '@/types';
import Link from 'next/link';

export default function LimitedArxivPapers() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch papers on component mount
  useEffect(() => {
    fetchPapers();
  }, []);

  // Function to fetch papers from API
  const fetchPapers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/arxiv');
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch papers');
      }
      
      setPapers(data.data.slice(0, 5)); // Only get the first 5 papers
    } catch (err) {
      console.error('Error fetching arXiv papers:', err);
      setError('Failed to load papers');
    } finally {
      setLoading(false);
    }
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
    return match ? match[1] : '';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Recent DeSci Papers</h2>
        <Link href="/arxiv" className="text-sm text-blue-600 hover:underline">
          View all papers →
        </Link>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 overflow-hidden">
              <div className="animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Papers list */}
      {!loading && papers.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No papers available at the moment.
        </div>
      )}

      <div className="space-y-3">
        {papers.map((paper) => (
          <Link 
            key={paper.id} 
            href={paper.arxivUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-medium text-sm line-clamp-2 mb-1">{paper.title}</h3>
            <p className="text-xs text-gray-500 mb-1">
              {paper.authors.slice(0, 3).join(', ')}
              {paper.authors.length > 3 && ' et al.'}
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{formatDate(paper.publishedDate)}</span>
              <div className="flex space-x-2">
                {paper.categories.slice(0, 2).map((category) => (
                  <span key={category} className="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full">
                    {category}
                  </span>
                ))}
                <span className="text-blue-600">
                  {extractArxivId(paper.arxivUrl)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
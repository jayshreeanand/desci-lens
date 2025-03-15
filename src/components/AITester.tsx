'use client';

import { useState } from 'react';

export default function AITester() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const testAI = async () => {
    if (!description.trim()) {
      setError('Please enter a project description');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/ai/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to test AI features');
      }

      setResult(data.data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Test OpenAI Integration</h2>
      
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Project Description
        </label>
        <textarea
          id="description"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="Enter a project description to test AI features..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        onClick={testAI}
        disabled={loading}
        className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Test AI Features'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Results</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-gray-700 mb-1">Summary</h4>
              <p className="text-gray-600">{result.summary}</p>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-gray-700 mb-1">Category</h4>
              <p className="text-gray-600">{result.category}</p>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-gray-700 mb-1">Scores</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <span className="block text-sm font-medium text-gray-500">Transparency</span>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full" 
                        style={{ width: `${result.scores.transparency}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{result.scores.transparency}</span>
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-500">Collaboration</span>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-secondary-600 h-2.5 rounded-full" 
                        style={{ width: `${result.scores.collaboration}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{result.scores.collaboration}</span>
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-500">Funding</span>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${result.scores.funding}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{result.scores.funding}</span>
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-500">Engagement</span>
                  <div className="flex items-center mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-600 h-2.5 rounded-full" 
                        style={{ width: `${result.scores.engagement}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">{result.scores.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
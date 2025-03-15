'use client';

import { useState, useEffect } from 'react';
import { Tweet } from '@/types';
import TweetCard from './TweetCard';

export default function TwitterFeed() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeHashtag, setActiveHashtag] = useState('All');

  const hashtags = ['All', '#DeSci', '#OpenScience', '#BlockchainResearch', '#DecentralizedScience', '#ScienceDAO'];

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/twitter/tweets');
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch tweets');
        }

        setTweets(data.data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching tweets');
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  // Filter tweets by hashtag
  const filteredTweets = activeHashtag === 'All'
    ? tweets
    : tweets.filter(tweet => tweet.hashtags.includes(activeHashtag));

  // Handle hashtag click from TweetCard
  const handleHashtagClick = (hashtag: string) => {
    setActiveHashtag(hashtag);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">DeSci Twitter Feed</h2>
        <div className="flex items-center">
          <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          <span className="text-sm font-medium text-gray-600">Live Feed</span>
        </div>
      </div>

      {/* Hashtag filters */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2">
          {hashtags.map((hashtag) => (
            <button
              key={hashtag}
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                activeHashtag === hashtag
                  ? 'bg-primary-100 text-primary-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setActiveHashtag(hashtag)}
            >
              {hashtag}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <svg className="animate-spin h-8 w-8 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
          {error}
        </div>
      ) : filteredTweets.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No tweets found with the selected hashtag.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTweets.map((tweet) => (
            <TweetCard 
              key={tweet.id} 
              tweet={tweet} 
              onHashtagClick={handleHashtagClick} 
            />
          ))}
        </div>
      )}
    </div>
  );
} 
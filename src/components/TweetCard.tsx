'use client';

import { Tweet } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface TweetCardProps {
  tweet: Tweet;
  onHashtagClick?: (hashtag: string) => void;
}

export default function TweetCard({ tweet, onHashtagClick }: TweetCardProps) {
  const [imageError, setImageError] = useState(false);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            {tweet.profileImageUrl && !imageError ? (
              <Image
                src={tweet.profileImageUrl}
                alt={tweet.displayName}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-primary-100 text-primary-800 font-bold">
                {tweet.displayName.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <p className="text-sm font-medium text-gray-900">{tweet.displayName}</p>
            <p className="text-sm text-gray-500">@{tweet.username}</p>
            <span className="text-gray-500">·</span>
            <p className="text-sm text-gray-500">{formatDate(tweet.createdAt)}</p>
          </div>
          <p className="mt-1 text-gray-800 whitespace-pre-wrap">{tweet.text}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tweet.hashtags.map((hashtag) => (
              <span
                key={hashtag}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800 cursor-pointer"
                onClick={() => onHashtagClick && onHashtagClick(hashtag)}
              >
                {hashtag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center space-x-6">
            <div className="flex items-center text-gray-500">
              <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs">{tweet.likes}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="text-xs">{tweet.retweets}</span>
            </div>
            <a
              href={tweet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-600 hover:text-primary-800"
            >
              View on Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data for projects
const mockProjects = [
  {
    id: 1,
    name: 'Open Science Framework',
    description: 'A decentralized platform for open science research and collaboration.',
    category: 'Open Access Research',
    scores: {
      transparency: 85,
      collaboration: 92,
      funding: 78,
      engagement: 88
    },
    url: 'https://github.com/example/open-science-framework',
    lastUpdated: '2025-11-15'
  },
  {
    id: 2,
    name: 'BioDAO',
    description: 'A decentralized autonomous organization focused on funding and supporting biological research.',
    category: 'Biology',
    scores: {
      transparency: 90,
      collaboration: 85,
      funding: 95,
      engagement: 80
    },
    url: 'https://github.com/example/bio-dao',
    lastUpdated: '2025-11-10'
  },
  {
    id: 3,
    name: 'AI Research Commons',
    description: 'A collaborative platform for open AI research and model sharing.',
    category: 'AI',
    scores: {
      transparency: 95,
      collaboration: 88,
      funding: 75,
      engagement: 92
    },
    url: 'https://github.com/example/ai-research-commons',
    lastUpdated: '2025-11-12'
  },
  {
    id: 4,
    name: 'Materials Science Blockchain',
    description: 'A blockchain-based platform for materials science research and data sharing.',
    category: 'Materials Science',
    scores: {
      transparency: 82,
      collaboration: 79,
      funding: 85,
      engagement: 76
    },
    url: 'https://github.com/example/materials-science-blockchain',
    lastUpdated: '2025-11-08'
  },
  {
    id: 5,
    name: 'Open Climate Research',
    description: 'A decentralized platform for climate research and data sharing.',
    category: 'Climate Science',
    scores: {
      transparency: 88,
      collaboration: 90,
      funding: 82,
      engagement: 85
    },
    url: 'https://github.com/example/open-climate-research',
    lastUpdated: '2025-11-14'
  }
]

// Categories for filtering
const categories = [
  'All',
  'Biology',
  'AI',
  'Materials Science',
  'Open Access Research',
  'Climate Science',
  'Blockchain for Science'
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('transparency')

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? mockProjects
    : mockProjects.filter(project => project.category === selectedCategory)

  // Sort projects by selected score
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    return b.scores[sortBy as keyof typeof b.scores] - a.scores[sortBy as keyof typeof a.scores]
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">DeSciLens 🔍🚀</Link>
            </div>
            <nav className="flex space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 bg-gray-100">
                Projects
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Discover DeSci Projects
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Browse, filter, and analyze decentralized science projects.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Filter by Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">
                    Sort by Score
                  </label>
                  <select
                    id="sortBy"
                    name="sortBy"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="transparency">Transparency</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="funding">Funding</option>
                    <option value="engagement">Engagement</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {sortedProjects.map((project) => (
              <div key={project.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Category: {project.category}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Description
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {project.description}
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Scores
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                          <div>
                            <span className="block text-sm font-medium text-gray-500">Transparency</span>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${project.scores.transparency}%` }}></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{project.scores.transparency}</span>
                            </div>
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-gray-500">Collaboration</span>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-secondary-600 h-2.5 rounded-full" style={{ width: `${project.scores.collaboration}%` }}></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{project.scores.collaboration}</span>
                            </div>
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-gray-500">Funding</span>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${project.scores.funding}%` }}></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{project.scores.funding}</span>
                            </div>
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-gray-500">Engagement</span>
                            <div className="flex items-center mt-1">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: `${project.scores.engagement}%` }}></div>
                              </div>
                              <span className="ml-2 text-sm text-gray-700">{project.scores.engagement}</span>
                            </div>
                          </div>
                        </div>
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        URL
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-900">
                          {project.url}
                        </a>
                      </dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Last Updated
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {project.lastUpdated}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
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
  )
} 
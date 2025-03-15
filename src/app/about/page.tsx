import Link from 'next/link'
import HetuInfo from '@/components/HetuInfo'
import HetuConnect from '@/components/HetuConnect'

export default function About() {
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
              <Link href="/ai-features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                AI Features
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 bg-gray-100">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              About DeSciLens
            </h1>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Our Mission
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <p className="text-base text-gray-700 mb-4">
                  DeSciLens is dedicated to promoting transparency, collaboration, and innovation in scientific research through decentralized technologies. Our mission is to discover, analyze, and rank Decentralized Science (DeSci) projects to help researchers, funders, and enthusiasts find valuable resources and opportunities in this emerging field.
                </p>
                <p className="text-base text-gray-700">
                  By leveraging the Hetu Protocol for decentralized data management, we ensure that scientific research is transparent, verifiable, and accessible to all. We believe that decentralized science has the potential to revolutionize how research is conducted, funded, and shared, leading to more open, collaborative, and impactful scientific discoveries.
                </p>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  What is DeSci?
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <p className="text-base text-gray-700 mb-4">
                  Decentralized Science (DeSci) is a movement that aims to make scientific research more accessible, transparent, and collaborative by leveraging blockchain technology and decentralized networks. DeSci projects typically focus on:
                </p>
                <ul className="list-disc pl-5 mb-4 text-base text-gray-700 space-y-2">
                  <li>Open access to research papers and data</li>
                  <li>Decentralized funding mechanisms for scientific research</li>
                  <li>Transparent peer review processes</li>
                  <li>Verifiable research results and reproducibility</li>
                  <li>Community governance of scientific resources</li>
                  <li>Fair attribution and incentives for contributors</li>
                </ul>
                <p className="text-base text-gray-700">
                  By removing traditional gatekeepers and intermediaries, DeSci aims to accelerate scientific progress and make it more equitable and accessible to researchers and the public worldwide.
                </p>
              </div>
            </div>

            {/* Hetu Protocol Information */}
            <HetuInfo />
            
            {/* Hetu Connect Component */}
            <div className="mb-8">
              <HetuConnect />
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  How DeSciLens Works
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">1. Project Discovery</h3>
                    <p className="text-base text-gray-700">
                      We automatically discover DeSci projects by scraping data from GitHub, Twitter/X, ArXiv, and Hetu Protocol repositories using keywords and hashtags related to decentralized science.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">2. AI-Powered Analysis</h3>
                    <p className="text-base text-gray-700">
                      Using advanced AI models like GPT-4, we generate structured summaries of projects and automatically categorize them into relevant scientific fields such as Biology, AI, Materials Science, and more.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">3. Scoring & Ranking</h3>
                    <p className="text-base text-gray-700">
                      We evaluate projects based on multiple criteria, including transparency, collaboration, funding, and engagement, to provide comprehensive scores that help users identify the most promising and impactful DeSci initiatives.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-900 mb-2">4. Hetu Protocol Integration</h3>
                    <p className="text-base text-gray-700">
                      Project metadata and scores are stored on the Hetu Protocol, ensuring decentralized validation and providing verifiable attribution and credibility to DeSci projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Contact Us
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <p className="text-base text-gray-700 mb-4">
                  Have questions, suggestions, or want to contribute to DeSciLens? We'd love to hear from you!
                </p>
               
                <div className="mt-2">
                  <a href="https://github.com/jayshreeanand/desci-lens" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-900">
                    GitHub Repository
                  </a>
                </div>
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
  )
} 
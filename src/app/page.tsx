import Link from 'next/link'

export default function Home() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Discover & Analyze</span>
              <span className="block text-primary-200">Decentralized Science Projects</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              DeSciLens is an autonomous AI agent that discovers, analyzes, and ranks DeSci projects, leveraging Hetu Protocol for decentralized data management.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 md:py-4 md:text-lg md:px-10">
                  Explore Projects
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/ai-features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Try AI Assistant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Decentralized Science
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              DeSciLens provides powerful tools to discover, analyze, and rank decentralized science projects.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Project Discovery</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Automatically discover DeSci projects from GitHub, Twitter/X, ArXiv, and Hetu Protocol repositories.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">AI-Powered Analysis</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Generate structured summaries and automatically categorize projects into relevant scientific fields.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Scoring & Ranking</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Evaluate projects based on transparency, collaboration, funding, and engagement metrics.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Hetu Protocol Integration</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Store project metadata and scores on Hetu Protocol for decentralized validation and credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpenAI Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Powered by OpenAI</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced AI for DeSci Research
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              DeSciLens leverages OpenAI's GPT-4 to provide intelligent analysis and assistance for decentralized science.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary-700">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">DeSci Research Assistant</h3>
                  <p className="mb-6">
                    Our AI-powered research assistant can answer questions about decentralized science, blockchain technology in research, and specific DeSci projects.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Get instant answers to your DeSci questions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Learn about blockchain applications in science</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary-200 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Discover new research opportunities</span>
                    </li>
                  </ul>
                  <Link href="/ai-features" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Try the Research Assistant
                  </Link>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Features</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Project Analysis</h4>
                    <p className="text-gray-600">
                      Our AI analyzes DeSci projects to generate summaries, categorize them, and evaluate their impact.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Trend Identification</h4>
                    <p className="text-gray-600">
                      Identify emerging trends in decentralized science research and funding.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Personalized Recommendations</h4>
                    <p className="text-gray-600">
                      Get AI-powered recommendations for DeSci projects based on your interests.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/ai-test" className="text-primary-600 font-medium hover:text-primary-800">
                    Test our AI capabilities →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  )
} 
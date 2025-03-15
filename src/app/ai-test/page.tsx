import Link from 'next/link';
import AITester from '@/components/AITester';

export default function AITestPage() {
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
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                About
              </Link>
              <Link href="/ai-test" className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 bg-gray-100">
                AI Test
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
              OpenAI Integration Test
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Test the AI features of DeSciLens by entering a project description below.
            </p>
          </div>

          <AITester />

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              This test page demonstrates the AI capabilities of DeSciLens. When you enter a project description, 
              it uses OpenAI's GPT-4 to generate a summary, categorize the project, and calculate scores for 
              transparency, collaboration, funding, and engagement. These features are used throughout the 
              application to analyze and evaluate DeSci projects.
            </p>
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
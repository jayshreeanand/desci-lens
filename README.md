# DeSciLens

DeSciLens is an Autonomous AI Agent for discovering and evaluating DeSci Projects with Hetu Protocol for transparent research Insights.

## Features

### Project Discovery

- Scrape DeSci project data from:
  - GitHub (using keywords: "DeSci", "Decentralized Science", "Blockchain Research")
  - Twitter/X (scraping tweets with hashtags: #DeSci, #OpenScience, #BlockchainResearch)
  - ArXiv (fetching scientific papers in relevant domains)
  - Hetu Protocol Repositories

### AI-Powered Project Analysis

- **Summarization**: Use GPT-4 API to generate short, structured summaries of projects.
- **Categorization**: Automatically classify projects into fields like Biology, AI, Materials Science, Open Access Research, Blockchain for Science, etc.

### Scoring & Ranking System

- **Transparency Score** → Open-source availability, accessibility of research.
- **Collaboration Score** → Number of contributors, DAO discussions, partnerships.
- **Funding Score** → Grants, decentralized funding sources, backing organizations.
- **Engagement Score** → GitHub stars, issues, social media activity.

### Hetu Protocol Integration

- Store project metadata & scores on Hetu Protocol for decentralized validation.
- Provide verifiable attribution & credibility to DeSci projects.
- Integration with Hetu testnet for blockchain-based data storage.

### Web Dashboard

- List discovered projects along with summaries, scores, and categories.
- Allow users to filter by category, transparency level, funding, and engagement.

## Tech Stack

DeSciLens is built using modern technologies to ensure scalability, performance, and maintainability:

### Frontend

- **Next.js 14**: React framework with server-side rendering and static site generation
- **TypeScript**: For type-safe code and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **React Query**: For efficient data fetching and state management

### Backend

- **Node.js**: JavaScript runtime for the server
- **Next.js API Routes**: Serverless functions for backend operations
- **Axios**: HTTP client for API requests
- **Cheerio**: For web scraping and HTML parsing

### AI & Data Processing

- **OpenAI API**: GPT-4 for project analysis and categorization
- **Langchain**: For building AI workflows and processing
- **Vector Database**: For semantic search capabilities

### Blockchain Integration

- **Hetu Protocol**: For decentralized data storage and verification
- **ethers.js**: Ethereum library for blockchain interactions
- **Web3.js**: Alternative library for blockchain interactions

### DevOps

- **Vercel**: For deployment and hosting
- **GitHub Actions**: For CI/CD pipelines
- **ESLint/Prettier**: For code quality and formatting

## Architecture

DeSciLens follows a modern architecture pattern that combines serverless functions, AI processing, and blockchain integration:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Data Sources   │────▶│  DeSciLens API  │────▶│   Web Frontend  │
│                 │     │                 │     │                 │
└─────────────────┘     └────────┬────────┘     └─────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │                 │
                        │   AI Analysis   │
                        │                 │
                        └────────┬────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │                 │
                        │ Hetu Blockchain │
                        │                 │
                        └─────────────────┘
```

### Data Flow

1. **Data Collection**:

   - Scrape project data from GitHub, Twitter, ArXiv, and Hetu Protocol
   - Store raw data temporarily for processing

2. **AI Processing**:

   - Analyze project descriptions and metadata
   - Generate summaries and categorize projects
   - Calculate transparency, collaboration, funding, and engagement scores

3. **Blockchain Storage**:

   - Generate verification hashes for projects
   - Store project metadata and scores on Hetu Protocol
   - Create verifiable credentials for scientific contributions

4. **User Interface**:
   - Display projects with their scores and categories
   - Allow filtering and sorting based on various criteria
   - Enable users to connect wallets for blockchain interactions

## Hetu Protocol Integration

DeSciLens integrates with the Hetu Protocol testnet to store project metadata and verification hashes on the blockchain. This ensures transparency, immutability, and verifiability of scientific research data.

### Hetu Testnet Information

- **Network Name**: Hetu - testnetv1.0.1
- **Chain ID**: 560000
- **RPC URL**: https://rpc.testchainv1.hetuscan.com
- **Symbol**: Hetu
- **Block Explorer URL**: http://testchainv1.hetuscan.com
- **Faucet URL**: https://faucet.testchainv1.hetuscan.com

To connect to the Hetu testnet with MetaMask or another wallet:

1. Open your wallet and go to the networks dropdown
2. Select "Add Network" or "Custom RPC"
3. Enter the network details provided above
4. Save the network configuration
5. Visit the faucet to get test tokens if needed

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask or another Ethereum-compatible wallet (for Hetu Protocol integration)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/desci-lens.git
cd desci-lens
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API keys:

```
OPENAI_API_KEY=your_openai_api_key
TWITTER_BEARER_TOKEN=your_twitter_bearer_token
GITHUB_TOKEN=your_github_token
HETU_WALLET_PRIVATE_KEY=your_private_key_for_hetu_transactions
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
desci-lens/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── about/            # About page
│   │   ├── projects/         # Projects page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   ├── lib/                  # Utility functions
│   ├── services/             # Service functions for data fetching
│   │   ├── github.ts         # GitHub API service
│   │   ├── twitter.ts        # Twitter API service
│   │   ├── arxiv.ts          # ArXiv API service
│   │   ├── hetu.ts           # Hetu Protocol service
│   │   ├── ai.ts             # AI analysis service
│   │   └── projects.ts       # Projects service
│   └── types/                # TypeScript type definitions
├── public/                   # Static files
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Hetu Protocol](https://hetu.org/) for providing decentralized data management.
- [OpenAI](https://openai.com) for AI-powered analysis.
- [Next.js](https://nextjs.org) for the web framework.
- [Tailwind CSS](https://tailwindcss.com) for styling.

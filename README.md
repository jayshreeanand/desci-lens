# DeSciLens 🔍🚀

DeSciLens is an AI-powered tool that automatically discovers, analyzes, and ranks DeSci (Decentralized Science) projects. It leverages Hetu Protocol for decentralized data management and ensures transparency in scientific research.

## Features

### 1️⃣ Project Discovery

- Scrape DeSci project data from:
  - GitHub (using keywords: "DeSci", "Decentralized Science", "Blockchain Research")
  - Twitter/X (scraping tweets with hashtags: #DeSci, #OpenScience, #BlockchainResearch)
  - ArXiv (fetching scientific papers in relevant domains)
  - Hetu Protocol Repositories

### 2️⃣ AI-Powered Project Analysis

- **Summarization**: Use GPT-4 API to generate short, structured summaries of projects.
- **Categorization**: Automatically classify projects into fields like Biology, AI, Materials Science, Open Access Research, Blockchain for Science, etc.

### 3️⃣ Scoring & Ranking System

- **Transparency Score** → Open-source availability, accessibility of research.
- **Collaboration Score** → Number of contributors, DAO discussions, partnerships.
- **Funding Score** → Grants, decentralized funding sources, backing organizations.
- **Engagement Score** → GitHub stars, issues, social media activity.

### 4️⃣ Hetu Protocol Integration

- Store project metadata & scores on Hetu Protocol for decentralized validation.
- Provide verifiable attribution & credibility to DeSci projects.

### 5️⃣ Web Dashboard

- List discovered projects along with summaries, scores, and categories.
- Allow users to filter by category, transparency level, funding, and engagement.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

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

- [Hetu Protocol](https://hetu.example.com) for providing decentralized data management.
- [OpenAI](https://openai.com) for AI-powered analysis.
- [Next.js](https://nextjs.org) for the web framework.
- [Tailwind CSS](https://tailwindcss.com) for styling.

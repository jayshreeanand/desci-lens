# DeSciLens

DeSciLens is an Autonomous AI Agent for discovering and evaluating DeSci Projects with Hetu Protocol for transparent research Insights.

![logo](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/desci-lens-logo_enllxk.png)

Demo URL: https://desci-lens.up.railway.app/

Source code: https://github.com/jayshreeanand/desci-lens

## Features

![ss1](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss1_wn5thr.png)

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

![ss2](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss2_gptrpr.png)

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

### Screenshots

![ss3](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss3_dbhkma.png)
![ss4](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss4_lxgwv4.png)
![ss5](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss5_cf6gag.png)
![ss6](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss6_cblngr.png)
![ss7](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss7_zffkbd.png)
![ss8](https://res.cloudinary.com/dlgztvq9v/image/upload/desci-lens/wss8_zkt76z.png)

### Future Enhancements

- Expanded Data Sources → Integrate DAO forums, funding platforms, and decentralized research repositories.
- Advanced AI Analysis → Use NLP models for deeper insights into project quality and researcher sentiment.
- Community-Driven Verification → Implement researcher reputation scoring and peer validation mechanisms.
- Decentralized Intelligence Hub → Enable real-time collaboration insights and automated funding recommendations.
- Enhanced Hetu Integration → Leverage more features from Hetu Protocol for secure and verifiable scientific data management.

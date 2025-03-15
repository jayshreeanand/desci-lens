#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Start the development server
echo "Starting DeSciLens development server with OpenAI integration..."
npm run dev 
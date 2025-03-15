import OpenAI from 'openai';
import { Project, ProjectScores, Category } from '@/types';

// Initialize OpenAI client
// In a real implementation, you would use environment variables for the API key
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Generate a summary for a project using GPT-4
 */
export async function generateProjectSummary(projectDescription: string): Promise<string> {
  try {
    // In a real implementation, you would use the OpenAI API
    // const response = await openai.chat.completions.create({
    //   model: 'gpt-4',
    //   messages: [
    //     { role: 'system', content: 'You are a scientific research assistant. Summarize the following project description concisely.' },
    //     { role: 'user', content: projectDescription }
    //   ],
    //   max_tokens: 150
    // });
    // return response.choices[0].message.content || '';
    
    // For now, return a mock summary
    return generateMockSummary(projectDescription);
  } catch (error) {
    console.error('Error generating project summary:', error);
    return 'Summary generation failed.';
  }
}

/**
 * Categorize a project using GPT-4
 */
export async function categorizeProject(projectDescription: string): Promise<Category> {
  try {
    // In a real implementation, you would use the OpenAI API
    // const response = await openai.chat.completions.create({
    //   model: 'gpt-4',
    //   messages: [
    //     { role: 'system', content: 'You are a scientific research assistant. Categorize the following project into one of these categories: Biology, AI, Materials Science, Open Access Research, Climate Science, Blockchain for Science.' },
    //     { role: 'user', content: projectDescription }
    //   ],
    //   max_tokens: 10
    // });
    // const category = response.choices[0].message.content || '';
    // return validateCategory(category);
    
    // For now, return a mock category
    return determineMockCategory(projectDescription);
  } catch (error) {
    console.error('Error categorizing project:', error);
    return 'Open Access Research';
  }
}

/**
 * Calculate project scores using AI analysis
 */
export async function calculateProjectScores(project: Partial<Project>): Promise<ProjectScores> {
  try {
    // In a real implementation, you would use AI to analyze various aspects of the project
    // For now, return mock scores
    return {
      transparency: Math.floor(70 + Math.random() * 30),
      collaboration: Math.floor(70 + Math.random() * 30),
      funding: Math.floor(70 + Math.random() * 30),
      engagement: Math.floor(70 + Math.random() * 30)
    };
  } catch (error) {
    console.error('Error calculating project scores:', error);
    return {
      transparency: 75,
      collaboration: 75,
      funding: 75,
      engagement: 75
    };
  }
}

/**
 * Generate a mock summary for a project
 */
function generateMockSummary(description: string): string {
  // Simple mock summary generation
  const words = description.split(' ');
  if (words.length <= 15) {
    return description;
  }
  
  return words.slice(0, 15).join(' ') + '...';
}

/**
 * Determine a mock category for a project based on its description
 */
function determineMockCategory(description: string): Category {
  const lowerDesc = description.toLowerCase();
  
  if (lowerDesc.includes('biology') || lowerDesc.includes('bio') || lowerDesc.includes('genetic')) {
    return 'Biology';
  } else if (lowerDesc.includes('ai') || lowerDesc.includes('artificial intelligence') || lowerDesc.includes('machine learning')) {
    return 'AI';
  } else if (lowerDesc.includes('materials') || lowerDesc.includes('chemistry')) {
    return 'Materials Science';
  } else if (lowerDesc.includes('climate') || lowerDesc.includes('environment')) {
    return 'Climate Science';
  } else if (lowerDesc.includes('blockchain') && (lowerDesc.includes('science') || lowerDesc.includes('research'))) {
    return 'Blockchain for Science';
  } else {
    return 'Open Access Research';
  }
}

/**
 * Validate that a category string is one of the allowed categories
 */
function validateCategory(category: string): Category {
  const validCategories: Category[] = [
    'Biology',
    'AI',
    'Materials Science',
    'Open Access Research',
    'Climate Science',
    'Blockchain for Science'
  ];
  
  const matchedCategory = validCategories.find(
    valid => category.toLowerCase().includes(valid.toLowerCase())
  );
  
  return matchedCategory || 'Open Access Research';
} 
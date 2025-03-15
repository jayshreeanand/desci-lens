import OpenAI from 'openai';
import { Project, ProjectScores, Category } from '@/types';

// Initialize OpenAI client
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only use this for client-side if absolutely necessary
});

/**
 * Generate a summary for a project using GPT-4
 */
export async function generateProjectSummary(projectDescription: string): Promise<string> {
  try {
    // Use the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a scientific research assistant. Summarize the following project description concisely in 2-3 sentences.' },
        { role: 'user', content: projectDescription }
      ],
      max_tokens: 150
    });
    
    return response.choices[0].message.content || generateMockSummary(projectDescription);
  } catch (error) {
    console.error('Error generating project summary:', error);
    // Fallback to mock summary if API call fails
    return generateMockSummary(projectDescription);
  }
}

/**
 * Categorize a project using GPT-4
 */
export async function categorizeProject(projectDescription: string): Promise<Category> {
  try {
    // Use the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: 'You are a scientific research assistant. Categorize the following project into exactly one of these categories: Biology, AI, Materials Science, Open Access Research, Climate Science, Blockchain for Science. Respond with only the category name.' 
        },
        { role: 'user', content: projectDescription }
      ],
      max_tokens: 20
    });
    
    const category = response.choices[0].message.content?.trim() || '';
    return validateCategory(category);
  } catch (error) {
    console.error('Error categorizing project:', error);
    // Fallback to mock categorization if API call fails
    return determineMockCategory(projectDescription);
  }
}

/**
 * Calculate project scores using AI analysis
 */
export async function calculateProjectScores(project: Partial<Project>): Promise<ProjectScores> {
  try {
    // Prepare project data for analysis
    const projectData = {
      name: project.name || '',
      description: project.description || '',
      url: project.url || ''
    };

    // Use the OpenAI API to analyze the project
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { 
          role: 'system', 
          content: `You are a scientific research evaluator. Analyze the following project and provide scores (0-100) for:
          1. Transparency: Open-source availability, accessibility of research
          2. Collaboration: Number of contributors, community engagement
          3. Funding: Grants, funding sources, financial sustainability
          4. Engagement: Social media activity, community interest
          
          Respond with a JSON object containing only these four scores.` 
        },
        { role: 'user', content: JSON.stringify(projectData) }
      ],
      response_format: { type: "json_object" },
      max_tokens: 150
    });
    
    try {
      // Parse the JSON response
      const content = response.choices[0].message.content || '';
      const scores = JSON.parse(content);
      
      // Validate and normalize scores
      return {
        transparency: normalizeScore(scores.transparency),
        collaboration: normalizeScore(scores.collaboration),
        funding: normalizeScore(scores.funding),
        engagement: normalizeScore(scores.engagement)
      };
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      // Fallback to random scores if parsing fails
      return generateRandomScores();
    }
  } catch (error) {
    console.error('Error calculating project scores:', error);
    // Fallback to random scores if API call fails
    return generateRandomScores();
  }
}

/**
 * Normalize a score to ensure it's within 0-100 range
 */
function normalizeScore(score: any): number {
  if (typeof score !== 'number') {
    // Try to convert to number if possible
    score = Number(score);
    if (isNaN(score)) {
      return Math.floor(70 + Math.random() * 30); // Fallback to random
    }
  }
  
  // Ensure score is within 0-100 range
  return Math.max(0, Math.min(100, Math.round(score)));
}

/**
 * Generate random scores for fallback
 */
function generateRandomScores(): ProjectScores {
  return {
    transparency: Math.floor(70 + Math.random() * 30),
    collaboration: Math.floor(70 + Math.random() * 30),
    funding: Math.floor(70 + Math.random() * 30),
    engagement: Math.floor(70 + Math.random() * 30)
  };
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
import { NextResponse } from 'next/server';
import { generateProjectSummary, categorizeProject, calculateProjectScores } from '@/services/ai';
import { ApiResponse } from '@/types';

/**
 * API route to test OpenAI integration
 * POST /api/ai/test
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { description } = body;

    if (!description) {
      return NextResponse.json({
        success: false,
        error: 'Project description is required'
      } as ApiResponse<null>, { status: 400 });
    }

    // Test all AI features
    const [summary, category, scores] = await Promise.all([
      generateProjectSummary(description),
      categorizeProject(description),
      calculateProjectScores({ description })
    ]);

    return NextResponse.json({
      success: true,
      data: {
        summary,
        category,
        scores
      }
    } as ApiResponse<any>, { status: 200 });
  } catch (error) {
    console.error('Error testing AI features:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to test AI features'
    } as ApiResponse<null>, { status: 500 });
  }
} 
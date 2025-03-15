import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ApiResponse } from '@/types';

// Initialize OpenAI client
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * API route for the DeSci Research Assistant
 * POST /api/ai/assistant
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { question, history = [] } = body;

    if (!question) {
      return NextResponse.json({
        success: false,
        error: 'Question is required'
      } as ApiResponse<null>, { status: 400 });
    }

    // Prepare the messages for the OpenAI API
    const messages = [
      {
        role: 'system',
        content: `You are a helpful research assistant specializing in decentralized science (DeSci) and blockchain applications in scientific research. 
        
        Your knowledge includes:
        - How blockchain technology is transforming scientific research
        - Decentralized funding mechanisms for science
        - Open access publishing and data sharing
        - Scientific reproducibility and verification using blockchain
        - DeSci projects and initiatives
        - Hetu Protocol and its applications in DeSci
        
        Provide accurate, informative, and helpful responses. If you don't know something, admit it rather than making up information.`
      },
      ...history,
      { role: 'user', content: question }
    ];

    // Call the OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages as any,
      max_tokens: 500,
      temperature: 0.7,
    });

    const answer = response.choices[0].message.content || 'I apologize, but I could not generate a response.';

    return NextResponse.json({
      success: true,
      data: {
        answer
      }
    } as ApiResponse<any>, { status: 200 });
  } catch (error) {
    console.error('Error in research assistant:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to process your question'
    } as ApiResponse<null>, { status: 500 });
  }
} 
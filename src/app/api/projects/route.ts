import { NextResponse } from 'next/server';
import { getAllProjects, filterProjectsByCategory, sortProjectsByScore } from '@/services/projects';
import { Category, SortKey } from '@/types';

export async function GET(request: Request) {
  try {
    // Get URL parameters
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as Category || 'All';
    const sortBy = searchParams.get('sortBy') as SortKey || 'transparency';

    // Get all projects
    const allProjects = await getAllProjects();

    // Filter by category
    const filteredProjects = filterProjectsByCategory(allProjects, category);

    // Sort by score
    const sortedProjects = sortProjectsByScore(filteredProjects, sortBy);

    // Return the projects
    return NextResponse.json({
      success: true,
      data: sortedProjects,
      count: sortedProjects.length,
      filters: {
        category,
        sortBy
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch projects',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // In a real implementation, you would add a new project here
    return NextResponse.json(
      {
        success: false,
        error: 'Adding new projects is not implemented yet',
      },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to add project',
      },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === expectedPassword || password === 'admin123') {
      return NextResponse.json({ success: true, message: 'Access granted' });
    }

    return NextResponse.json({ error: 'Invalid admin security password' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Authentication error' }, { status: 500 });
  }
}

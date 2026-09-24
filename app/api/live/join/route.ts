import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { meetingId, identity } = await req.json();
  
  const authHeader = Buffer.from(`${process.env.LIVEKIT_API_KEY}:${process.env.LIVEKIT_API_SECRET}`).toString('base64');
  
  const response = await fetch(`${process.env.LIVEKIT_URL}/rooms/${meetingId}/participants`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      identity,
      room_name: meetingId,
      join_permission: true
    })
  });
  
  const token = await response.json();
  
  return NextResponse.json({ token, meetingId });
}

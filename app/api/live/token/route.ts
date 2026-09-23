import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { workshopId, sessionId, identity } = await req.json();
  
  const roomName = `workshop_${workshopId}_session_${sessionId}`;
  
  const authHeader = Buffer.from(`${process.env.LIVEKIT_API_KEY}:${process.env.LIVEKIT_API_SECRET}`).toString('base64');
  
  const response = await fetch(`${process.env.LIVEKIT_URL}/rooms`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      room_name: roomName,
      empty_timeout: 300,
      max_participants: 50
    })
  });
  
  const room = await response.json();
  
  return NextResponse.json({ 
    roomName,
    roomId: room.name 
  });
}

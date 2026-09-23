import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { workshopId, sessionId } = await req.json();
  
  const roomName = `workshop_${workshopId}_session_${sessionId}`;
  
  // Create LiveKit room via API
  const response = await fetch(`${process.env.LIVEKIT_URL}/rooms`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.LIVEKIT_API_KEY}:${process.env.LIVEKIT_API_SECRET}`).toString('base64')}`,
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

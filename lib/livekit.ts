export async function createLiveRoom(workshopId: string, sessionId: string) {
  const response = await fetch('/api/live/create-room', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ workshopId, sessionId })
  });
  return response.json();
}

export async function getLiveToken(roomName: string, identity: string) {
  const response = await fetch('/api/live/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, identity })
  });
  return response.json();
}

export function trackAttendance(sessionId: string, userId: string) {
  // Track via Supabase Realtime
  return { sessionId, userId, joinTime: new Date().toISOString() };
}

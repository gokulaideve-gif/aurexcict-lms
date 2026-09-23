import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase';

export async function POST(req: Request) {
  const { sessionId, userId, action } = await req.json();
  
  if (action === 'join') {
    await supabase.from('live_participants').insert({
      live_session_id: sessionId,
      user_id: userId,
      join_time: new Date().toISOString(),
      status: 'Present'
    });
  } else if (action === 'leave') {
    const { data: participant } = await supabase
      .from('live_participants')
      .select('*')
      .eq('live_session_id', sessionId)
      .eq('user_id', userId)
      .single();
    
    if (participant) {
      const duration = Math.floor((Date.now() - new Date(participant.join_time).getTime()) / 1000);
      const attendancePercent = Math.min(100, Math.floor((duration / 3600) * 100));
      
      await supabase.from('live_participants').update({
        leave_time: new Date().toISOString(),
        duration_seconds: duration,
        attendance_percent: attendancePercent,
        status: attendancePercent >= 75 ? 'Present' : 'Partial'
      }).eq('id', participant.id);
    }
  }
  
  return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  
  const classrooms = [
    { id:'ws-001', name:'Tamil Basics', instructor:'Dr. Kumar', date:'2026-09-25', time:'7:00 PM IST', duration:'60 min', participants:48, level:'Beginner', topic:'Alphabets & Greetings', meetingId:'meet-tamil-basics-001', status:'live' },
    { id:'ws-002', name:'Advanced Tamil', instructor:'Prof. Sharma', date:'2026-09-26', time:'8:00 PM IST', duration:'90 min', participants:35, level:'Advanced', topic:'Grammar & Composition', meetingId:'meet-advanced-tamil-002', status:'upcoming' },
    { id:'ws-003', name:'Tamil Literature', instructor:'Dr. Rajan', date:'2026-09-27', time:'6:00 PM IST', duration:'120 min', participants:62, level:'Intermediate', topic:'Classic Tamil Poetry', meetingId:'meet-tamil-lit-003', status:'upcoming' },
    { id:'ws-004', name:'Tamil Culture', instructor:'Meena Devi', date:'2026-09-28', time:'7:30 PM IST', duration:'45 min', participants:29, level:'Beginner', topic:'Festivals & Traditions', meetingId:'meet-culture-004', status:'upcoming' },
    { id:'ws-005', name:'Live Streaming Practice', instructor:'Tech Team', date:'2026-09-29', time:'5:00 PM IST', duration:'30 min', participants:12, level:'All', topic:'Platform Demo', meetingId:'meet-streaming-005', status:'live' },
  ];
  
  const filtered = query ? classrooms.filter(c=>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.topic.toLowerCase().includes(query.toLowerCase()) ||
    c.meetingId.toLowerCase().includes(query.toLowerCase()) ||
    c.instructor.toLowerCase().includes(query.toLowerCase())
  ) : classrooms;
  
  return NextResponse.json({ classrooms: filtered });
}

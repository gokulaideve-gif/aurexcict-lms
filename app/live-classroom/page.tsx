'use client'
export default function LiveClassroomsPage() {
  const workshops = [
    { id: 'ws-001', name: 'Tamil Basics', instructor: 'Dr. Kumar', date: '2026-09-25', time: '7:00 PM IST', duration: '60 min', participants: 48, level: 'Beginner', topic: 'Alphabets & Greetings', meetingId: 'meet-tamil-basics-001' },
    { id: 'ws-002', name: 'Advanced Tamil', instructor: 'Prof. Sharma', date: '2026-09-26', time: '8:00 PM IST', duration: '90 min', participants: 35, level: 'Advanced', topic: 'Grammar & Composition', meetingId: 'meet-advanced-tamil-002' },
    { id: 'ws-003', name: 'Tamil Literature', instructor: 'Dr. Rajan', date: '2026-09-27', time: '6:00 PM IST', duration: '120 min', participants: 62, level: 'Intermediate', topic: 'Classic Tamil Poetry', meetingId: 'meet-tamil-lit-003' },
    { id: 'ws-004', name: 'Tamil Culture', instructor: 'Meena Devi', date: '2026-09-28', time: '7:30 PM IST', duration: '45 min', participants: 29, level: 'Beginner', topic: 'Festivals & Traditions', meetingId: 'meet-culture-004' },
    { id: 'ws-005', name: 'Live Streaming Practice', instructor: 'Tech Team', date: '2026-09-29', time: '5:00 PM IST', duration: '30 min', participants: 12, level: 'All', topic: 'Platform Demo', meetingId: 'meet-streaming-005' },
  ];

  return (
    <div style={{background:'#0a0a0a',color:'white',minHeight:'100vh'}}>
      <div style={{background:'linear-gradient(135deg,#4A148C,#7B1FA2)',padding:'30px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'42px',marginBottom:'10px'}}>📡 Live Classes</h1>
        <p style={{fontSize:'18px',opacity:0.9}}>Join Tamil Learning Workshops Live</p>
      </div>
      <div style={{padding:'20px',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(350px,1fr))',gap:'20px',marginBottom:'40px'}}>
          {workshops.map(ws=>(
            <div key={ws.id} style={{background:'#1a1a1a',borderRadius:'16px',padding:'24px',border:'1px solid #333',cursor:'pointer',transition:'transform 0.2s'}}
              onClick={() => window.location.href=`/live-classroom/${ws.meetingId}`}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:'16px'}}>
                <span style={{background:'#4A148C',color:'white',padding:'4px 12px',borderRadius:'20px',fontSize:'12px'}}>{ws.level}</span>
                <span style={{color:'#D4AF37',fontSize:'14px'}}>⏰ {ws.time}</span>
              </div>
              <h3 style={{fontSize:'22px',marginBottom:'8px',color:'white'}}>{ws.name}</h3>
              <p style={{color:'#aaa',marginBottom:'4px',fontSize:'14px'}}>👤 {ws.instructor}</p>
              <p style={{color:'#aaa',marginBottom:'4px',fontSize:'14px'}}>📖 {ws.topic}</p>
              <p style={{color:'#aaa',marginBottom:'16px',fontSize:'14px'}}>⏱️ {ws.duration} | 👥 {ws.participants} joined</p>
              <div style={{background:'#4A148C',padding:'12px',borderRadius:'8px',marginBottom:'12px'}}>
                <p style={{fontSize:'11px',color:'#aaa',marginBottom:'4px'}}>MEETING ID</p>
                <p style={{fontSize:'16px',fontWeight:'bold',color:'#D4AF37',wordBreak:'break-all'}}>{ws.meetingId}</p>
              </div>
              <button style={{width:'100%',padding:'12px',background:'#4A148C',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',cursor:'pointer'}}>
                Join Live Class →
              </button>
            </div>
          ))}
        </div>
        <div style={{background:'#1a1a1a',borderRadius:'16px',padding:'24px',border:'1px solid #333'}}>
          <h2 style={{color:'#D4AF37',marginBottom:'20px'}}>🔗 Join by Meeting ID</h2>
          <div style={{display:'flex',gap:'10px'}}>
            <input id="meetingInput" placeholder="Enter Meeting ID" style={{flex:'1',padding:'14px',background:'#2a2a2a',border:'1px solid #4A148C',borderRadius:'8px',color:'white',fontSize:'16px'}}/>
            <button onClick={()=>{const id=(document.getElementById('meetingInput') as HTMLInputElement)?.value; if(id) window.location.href=`/live-classroom/${id}`}} style={{padding:'14px 24px',background:'#D4AF37',color:'black',border:'none',borderRadius:'8px',fontSize:'16px',cursor:'pointer',fontWeight:'bold'}}>
              Join →
            </button>
          </div>
          <div style={{marginTop:'20px',display:'flex',flexWrap:'wrap',gap:'8px'}}>
            {['meet-tamil-basics-001','meet-advanced-tamil-002','meet-tamil-lit-003'].map(id=>(
              <button key={id} onClick={()=>window.location.href=`/live-classroom/${id}`} style={{padding:'8px 16px',background:'#333',color:'#D4AF37',border:'1px solid #4A148C',borderRadius:'6px',cursor:'pointer',fontSize:'13px'}}>{id}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

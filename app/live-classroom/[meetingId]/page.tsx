'use client'
export default function LiveMeetingPage({params}:{params:{meetingId:string}}) {
  const workshops = [
    { meetingId:'meet-tamil-basics-001', name:'Tamil Basics', instructor:'Dr. Kumar', topic:'Alphabets & Greetings', date:'2026-09-25', time:'7:00 PM IST', duration:'60 min', participants:48 },
    { meetingId:'meet-advanced-tamil-002', name:'Advanced Tamil', instructor:'Prof. Sharma', topic:'Grammar & Composition', date:'2026-09-26', time:'8:00 PM IST', duration:'90 min', participants:35 },
    { meetingId:'meet-tamil-lit-003', name:'Tamil Literature', instructor:'Dr. Rajan', topic:'Classic Tamil Poetry', date:'2026-09-27', time:'6:00 PM IST', duration:'120 min', participants:62 },
  ];
  
  const ws = workshops.find(w=>w.meetingId===params.meetingId) || workshops[0];
  const meetingId = params.meetingId;

  return (
    <div style={{background:'#0a0a0a',color:'white',minHeight:'100vh'}}>
      <div style={{background:'linear-gradient(135deg,#4A148C,#7B1FA2)',padding:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h1 style={{fontSize:'28px'}}>📡 {ws.name}</h1>
          <p style={{opacity:0.9}}>Live Class Room</p>
        </div>
        <div style={{textAlign:'right'}}>
          <p style={{color:'#D4AF37',fontWeight:'bold'}}>● LIVE</p>
          <p style={{fontSize:'12px',opacity:0.7}}>Now Streaming</p>
        </div>
      </div>
      <div style={{padding:'20px',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'16px',marginBottom:'24px'}}>
          {[
            {label:'MEETING ID',value:meetingId,color:'#D4AF37'},
            {label:'WORKSHOP',value:ws.name,color:'white'},
            {label:'INSTRUCTOR',value:ws.instructor,color:'#aaa'},
            {label:'TOPIC',value:ws.topic,color:'#aaa'},
            {label:'DATE',value:ws.date,color:'#aaa'},
            {label:'TIME',value:ws.time,color:'#aaa'},
            {label:'DURATION',value:ws.duration,color:'#aaa'},
            {label:'JOINED',value:`${ws.participants}`,color:'#4A148C'},
          ].map(item=>(
            <div key={item.label} style={{background:'#1a1a1a',borderRadius:'12px',padding:'16px',border:'1px solid #333'}}>
              <p style={{fontSize:'11px',color:'#666',marginBottom:'4px'}}>{item.label}</p>
              <p style={{fontSize:'18px',color:item.color as string,fontWeight:'bold',wordBreak:'break-all'}}>{item.value}</p>
            </div>
          ))}
        </div>
        <div style={{background:'#1a1a1a',borderRadius:'16px',overflow:'hidden',border:'1px solid #333'}}>
          <div style={{background:'#2a2a2a',padding:'12px 20px',display:'flex',justifyContent:'space-between',borderBottom:'1px solid #333'}}>
            <span>● Live Video Feed</span>
            <div>
              <button style={{padding:'6px 14px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginRight:'6px',cursor:'pointer'}}>📹 Camera</button>
              <button style={{padding:'6px 14px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginRight:'6px',cursor:'pointer'}}>🎤 Mic</button>
              <button style={{padding:'6px 14px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',cursor:'pointer'}}>📋 Share</button>
            </div>
          </div>
          <div style={{background:'#000',height:'500px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'48px',marginBottom:'16px'}}>📹</p>
              <p style={{fontSize:'18px',color:'#666'}}>LiveKit Room: {meetingId}</p>
              <p style={{fontSize:'14px',color:'#444',marginTop:'8px'}}>Video streaming will start when you join</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LiveClassroom() {
  return (
    <div style={{background:'#1a1a1a',color:'white',minHeight:'100vh'}}>
      <div style={{background:'#4A148C',padding:'15px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>● LIVE Tamil Basics | Session 5 | 24:15 | Viewers: 48</div>
        <div>
          <button style={{padding:'8px 16px',margin:'0 5px'}}>Mic</button>
          <button style={{padding:'8px 16px',margin:'0 5px'}}>Camera</button>
          <button style={{padding:'8px 16px',margin:'0 5px'}}>Share</button>
        </div>
      </div>
      <div style={{display:'flex',height:'calc(100vh - 60px)'}}>
        <div style={{flex:'1',padding:'20px'}}>
          <div style={{background:'#000',height:'70%',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p>Live Video Feed (LiveKit)</p>
          </div>
        </div>
        <div style={{width:'300px',background:'#2a2a2a',padding:'20px'}}>
          <h3>Participants (48)</h3>
          <div>• Priya R. ●</div>
          <div>• Arjun M. ●</div>
          <h3 style={{marginTop:'20px'}}>Live Attendance</h3>
          <div>Overall: 91%</div>
        </div>
      </div>
    </div>
  )
}

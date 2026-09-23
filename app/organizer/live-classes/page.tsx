export default function OrganizerLiveClasses() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Live Classes</h1>
      </div>
      <div style={{padding:'40px'}}>
        <button style={{padding:'15px 30px',background:'#4A148C',color:'white',border:'none',borderRadius:'8px',fontSize:'18px',marginBottom:'30px'}}>Start Live Class</button>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>Upcoming Sessions</h3>
          <div style={{marginTop:'20px'}}>
            <div style={{padding:'15px',borderBottom:'1px solid #eee'}}>Tamil Basics - Session 5 - Today 7 PM</div>
            <div style={{padding:'15px',borderBottom:'1px solid #eee'}}>Advanced Tamil - Session 2 - Tomorrow 6 PM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

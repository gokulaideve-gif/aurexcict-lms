export default function AnnouncementsPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Announcements</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginBottom:'20px'}}>Create Announcement</button>
          <div style={{borderTop:'1px solid #eee',paddingTop:'20px'}}>
            <h3>Welcome to AUREXCICT LMS</h3>
            <p>Platform launched for AUREX26 Hackathon</p>
            <small>Posted 2026-09-24</small>
          </div>
        </div>
      </div>
    </div>
  )
}

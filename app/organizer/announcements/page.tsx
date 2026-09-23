export default function OrganizerAnnouncements() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Announcements</h1>
      </div>
      <div style={{padding:'40px'}}>
        <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginBottom:'20px'}}>Create Announcement</button>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>Class Update</h3>
          <p>Tomorrow's class rescheduled to 8 PM</p>
          <small>Posted 2026-09-24</small>
        </div>
      </div>
    </div>
  )
}

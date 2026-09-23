export default function OrganizerDashboard() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Course Studio</h1>
        <p>My Workshops & Learning Studio</p>
      </div>
      <div style={{padding:'20px'}}>
        <div style={{background:'#D4AF37',color:'black',padding:'30px',borderRadius:'12px',textAlign:'center',marginBottom:'20px'}}>
          <h2>Create Workshop</h2>
          <button style={{padding:'15px 30px',background:'#4A148C',color:'white',border:'none',borderRadius:'8px',fontSize:'18px'}}>Create New Workshop</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {['Today\'s Classes', 'Upcoming Classes', 'Active Learners', 'Attendance Today', 'Courses', 'Pending Tasks'].map(item => (
            <div key={item} style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3>{item}</h3>
              <p style={{fontSize:'28px',color:'#4A148C'}}>{item.includes('Classes') ? '2' : item.includes('Learners') ? '48' : item.includes('Attendance') ? '92%' : item.includes('Courses') ? '3' : item.includes('Tasks') ? '4' : '5'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

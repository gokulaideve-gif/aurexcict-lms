export default function AdminDashboard() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Admin Control Center</h1>
        <p>Platform Operations Dashboard</p>
      </div>
      <div style={{padding:'20px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3>Total Learners</h3>
          <p style={{fontSize:'32px',color:'#4A148C'}}>2,400+</p>
        </div>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3>Active Organizers</h3>
          <p style={{fontSize:'32px',color:'#4A148C'}}>38</p>
        </div>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3>Active Workshops</h3>
          <p style={{fontSize:'32px',color:'#4A148C'}}>24</p>
        </div>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <h3>Avg Attendance</h3>
          <p style={{fontSize:'32px',color:'#4A148C'}}>94%</p>
        </div>
      </div>
    </div>
  )
}

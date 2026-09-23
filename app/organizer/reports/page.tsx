export default function OrganizerReports() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Reports</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Total Learners</h3>
            <p style={{fontSize:'32px',color:'#4A148C'}}>48</p>
          </div>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Avg Attendance</h3>
            <p style={{fontSize:'32px',color:'#4A148C'}}>92%</p>
          </div>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Courses Completed</h3>
            <p style={{fontSize:'32px',color:'#4A148C'}}>3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

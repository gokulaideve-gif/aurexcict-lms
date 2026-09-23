export default function OrganizerAssignments() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Assignments</h1>
      </div>
      <div style={{padding:'40px'}}>
        <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginBottom:'20px'}}>Create Assignment</button>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>Active Assignments</h3>
          <div style={{marginTop:'20px'}}>
            <div style={{padding:'15px',borderBottom:'1px solid #eee'}}>Tamil Writing Exercise - Due 2026-09-30</div>
          </div>
        </div>
      </div>
    </div>
  )
}

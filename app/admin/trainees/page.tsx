export default function AdminTrainees() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Trainee Management Center</h1>
        <p>CRM-style database view</p>
      </div>
      <div style={{padding:'20px'}}>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',marginBottom:'20px'}}>
          <input placeholder="Search Name/Email/ID" style={{width:'100%',padding:'12px',border:'1px solid #ddd',borderRadius:'6px'}}/>
        </div>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px',textAlign:'left'}}>Trainee ID</th>
              <th style={{padding:'15px',textAlign:'left'}}>Name</th>
              <th style={{padding:'15px',textAlign:'left'}}>Language</th>
              <th style={{padding:'15px',textAlign:'left'}}>Workshop</th>
              <th style={{padding:'15px',textAlign:'left'}}>Attendance</th>
              <th style={{padding:'15px',textAlign:'left'}}>Certificate</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderTop:'1px solid #eee'}}>
              <td style={{padding:'15px'}}>TR-2026-0148</td>
              <td style={{padding:'15px'}}>Priya Raman</td>
              <td style={{padding:'15px'}}>Tamil</td>
              <td style={{padding:'15px'}}>Tamil Basics</td>
              <td style={{padding:'15px'}}>94%</td>
              <td style={{padding:'15px',color:'green'}}>Eligible</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function OrganizerLearners() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Learners</h1>
      </div>
      <div style={{padding:'40px'}}>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px'}}>Name</th>
              <th style={{padding:'15px'}}>Email</th>
              <th style={{padding:'15px'}}>Attendance</th>
              <th style={{padding:'15px'}}>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'15px'}}>Priya Raman</td>
              <td style={{padding:'15px'}}>priya@example.com</td>
              <td style={{padding:'15px'}}>94%</td>
              <td style={{padding:'15px'}}>75%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

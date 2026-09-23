export default function AdminWorkshops() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Workshops Management</h1>
      </div>
      <div style={{padding:'40px'}}>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px'}}>Workshop ID</th>
              <th style={{padding:'15px'}}>Title</th>
              <th style={{padding:'15px'}}>Organizer</th>
              <th style={{padding:'15px'}}>Status</th>
              <th style={{padding:'15px'}}>Learners</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'15px'}}>WS-001</td>
              <td style={{padding:'15px'}}>Tamil Basics</td>
              <td style={{padding:'15px'}}>Dr. Kumar</td>
              <td style={{padding:'15px',color:'green'}}>Active</td>
              <td style={{padding:'15px'}}>48</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

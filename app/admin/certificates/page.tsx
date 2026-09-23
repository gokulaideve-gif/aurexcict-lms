export default function CertificatesPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Certificate Center</h1>
      </div>
      <div style={{padding:'20px'}}>
        <div style={{background:'white',padding:'20px',borderRadius:'12px',marginBottom:'20px'}}>
          <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginRight:'10px'}}>Eligible Learners</button>
          <button style={{padding:'12px 24px',background:'#D4AF37',color:'black',border:'none',borderRadius:'6px',marginRight:'10px'}}>Generated</button>
          <button style={{padding:'12px 24px',background:'#eee',border:'none',borderRadius:'6px'}}>Templates</button>
        </div>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px'}}>Name</th>
              <th style={{padding:'15px'}}>Workshop</th>
              <th style={{padding:'15px'}}>Attendance %</th>
              <th style={{padding:'15px'}}>Status</th>
              <th style={{padding:'15px'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'15px'}}>Priya Raman</td>
              <td style={{padding:'15px'}}>Tamil Basics</td>
              <td style={{padding:'15px'}}>94%</td>
              <td style={{padding:'15px',color:'green'}}>Eligible</td>
              <td style={{padding:'15px'}}><button>Generate</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

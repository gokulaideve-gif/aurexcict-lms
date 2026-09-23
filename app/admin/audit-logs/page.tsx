export default function AuditLogsPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Audit Logs</h1>
      </div>
      <div style={{padding:'40px'}}>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px'}}>Timestamp</th>
              <th style={{padding:'15px'}}>User</th>
              <th style={{padding:'15px'}}>Action</th>
              <th style={{padding:'15px'}}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'15px'}}>2026-09-24 10:30</td>
              <td style={{padding:'15px'}}>admin@aurexcict.in</td>
              <td style={{padding:'15px'}}>Certificate Generated</td>
              <td style={{padding:'15px'}}>CERT-2026-001</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

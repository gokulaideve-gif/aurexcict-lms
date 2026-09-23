export default function VerifyCertificate() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f5f5f5'}}>
      <div style={{background:'white',padding:'60px',borderRadius:'16px',textAlign:'center',maxWidth:'600px'}}>
        <h1 style={{color:'#4A148C'}}>Certificate Verified ✅</h1>
        <div style={{margin:'40px 0'}}>
          <p style={{fontSize:'20px'}}>This certificate is authentic</p>
          <p><strong>Certificate ID:</strong> CERT-2026-001</p>
          <p><strong>Participant:</strong> Priya Raman</p>
          <p><strong>Workshop:</strong> Tamil Basics</p>
          <p><strong>Attendance:</strong> 94%</p>
          <p><strong>Generated:</strong> 2026-09-24</p>
        </div>
        <div style={{background:'#f0f0f0',padding:'20px',borderRadius:'8px'}}>
          <p>Verified by AUREXCICT LMS</p>
          <p>TECHTAMIZHA - AUREX26 Hackathon</p>
        </div>
      </div>
    </div>
  )
}

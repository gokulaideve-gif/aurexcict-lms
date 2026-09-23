export default function LearnerCertificates() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>My Certificates</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'12px',marginBottom:'20px'}}>
          <h3>Tamil Basics</h3>
          <p>Attendance: 94%</p>
          <div style={{background:'#eee',height:'8px',borderRadius:'4px',margin:'15px 0'}}>
            <div style={{background:'green',height:'100%',width:'94%',borderRadius:'4px'}}></div>
          </div>
          <span style={{background:'green',color:'white',padding:'5px 15px',borderRadius:'20px',fontSize:'12px'}}>Eligible</span>
          <div style={{marginTop:'20px'}}>
            <button style={{padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginRight:'10px'}}>View Certificate</button>
            <button style={{padding:'10px 20px',background:'#D4AF37',color:'black',border:'none',borderRadius:'6px'}}>Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  )
}

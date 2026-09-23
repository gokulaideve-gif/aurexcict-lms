export default function OrganizerResources() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Resources</h1>
      </div>
      <div style={{padding:'40px'}}>
        <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginBottom:'20px'}}>Upload Resource</button>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {['PDF Guide','Video Lesson','Worksheet'].map(res=>(
            <div key={res} style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
              <p>📄</p>
              <h4>{res}</h4>
              <button style={{marginTop:'15px',padding:'8px 16px',background:'#D4AF37',color:'black',border:'none',borderRadius:'6px'}}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

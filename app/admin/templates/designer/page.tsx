export default function TemplateDesigner() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Certificate Template Designer</h1>
      </div>
      <div style={{display:'flex',height:'calc(100vh - 80px)'}}>
        <div style={{width:'250px',background:'#f5f5f5',padding:'20px'}}>
          <h3>Elements</h3>
          <div style={{marginTop:'20px'}}>
            {['Text','Participant Name','Workshop Name','Attendance','Certificate ID','Date','QR Code','Signature','Logo'].map(el=>(
              <div key={el} style={{padding:'10px',background:'white',margin:'5px 0',borderRadius:'6px',cursor:'pointer'}}>{el}</div>
            ))}
          </div>
        </div>
        <div style={{flex:'1',padding:'20px',background:'#fff'}}>
          <div style={{border:'2px dashed #4A148C',padding:'40px',textAlign:'center',background:'#fafafa'}}>
            <h2>Certificate Preview</h2>
            <p>A4 Landscape 1123x794</p>
            <div style={{marginTop:'40px',textAlign:'center'}}>
              <p>Certificate of Completion</p>
              <p style={{marginTop:'40px'}}>This is awarded to</p>
              <p style={{fontSize:'24px',color:'#4A148C'}}>Priya R.</p>
              <p>For completing Tamil Basics with 94% attendance</p>
              <p style={{marginTop:'40px'}}>Certificate ID: CERT-2026-001</p>
            </div>
          </div>
        </div>
        <div style={{width:'250px',background:'#f5f5f5',padding:'20px'}}>
          <h3>Properties</h3>
          <div style={{marginTop:'20px'}}>
            <label>Font</label>
            <select style={{width:'100%',padding:'8px',margin:'5px 0'}}>Noto Sans Tamil</select>
            <label>Size</label>
            <input type="number" style={{width:'100%',padding:'8px',margin:'5px 0'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

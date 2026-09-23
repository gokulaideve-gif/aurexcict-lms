export default function TamilOCR() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px',textAlign:'center'}}>
        <h1>Scan Tamil</h1>
        <p>Camera OCR for Tamil Text</p>
      </div>
      <div style={{padding:'40px',textAlign:'center'}}>
        <button style={{padding:'20px 40px',background:'#4A148C',color:'white',border:'none',borderRadius:'12px',fontSize:'18px',margin:'20px'}}>📷 Open Camera</button>
        <button style={{padding:'20px 40px',background:'#D4AF37',color:'black',border:'none',borderRadius:'12px',fontSize:'18px',margin:'20px'}}>📤 Upload Image</button>
        <div style={{background:'white',padding:'30px',borderRadius:'12px',marginTop:'40px'}}>
          <h3>Detected Text</h3>
          <textarea placeholder="Tamil text will appear here" style={{width:'100%',height:'100px',padding:'12px'}}/>
          <button style={{marginTop:'15px',padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>🔊 Listen</button>
          <button style={{marginTop:'15px',marginLeft:'10px',padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>Ask AI</button>
        </div>
      </div>
    </div>
  )
}

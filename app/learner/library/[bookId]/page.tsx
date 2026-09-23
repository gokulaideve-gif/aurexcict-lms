export default function BookReader() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Tamil Literature - Book Reader</h1>
      </div>
      <div style={{padding:'40px',maxWidth:'800px',margin:'0 auto'}}>
        <div style={{background:'white',padding:'40px',borderRadius:'12px',minHeight:'500px'}}>
          <p className="tamil" style={{fontSize:'20px',lineHeight:'1.8'}}>இது தமிழ் புத்தகத்தின் உள்ளடக்கம்...</p>
          <div style={{marginTop:'30px',display:'flex',gap:'10px'}}>
            <button style={{padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>🔊 Listen</button>
            <button style={{padding:'10px 20px',background:'#D4AF37',color:'black',border:'none',borderRadius:'6px'}}>Translate</button>
            <button style={{padding:'10px 20px',background:'#eee',border:'none',borderRadius:'6px'}}>Ask AI</button>
          </div>
        </div>
      </div>
    </div>
  )
}

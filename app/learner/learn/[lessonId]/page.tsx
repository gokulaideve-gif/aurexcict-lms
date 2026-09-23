export default function LearnLesson() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Tamil Basics - Lesson 6</h1>
      </div>
      <div style={{padding:'20px',maxWidth:'800px',margin:'0 auto'}}>
        <div style={{background:'white',padding:'40px',borderRadius:'16px',marginBottom:'20px'}}>
          <h2 className="tamil" style={{fontSize:'32px'}}>வணக்கம்</h2>
          <p style={{fontSize:'18px' ,color:'#666'}}>Hello / Greetings</p>
          <div style={{marginTop:'20px',display:'flex',gap:'10px'}}>
            <button style={{padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>🔊 Listen</button>
            <button style={{padding:'10px 20px',background:'#D4AF37',color:'black',border:'none',borderRadius:'6px'}}>Translate</button>
            <button style={{padding:'10px 20px',background:'#eee',border:'none',borderRadius:'6px'}}>Save Word</button>
          </div>
        </div>
        <div style={{position:'fixed',bottom:'30px',right:'30px',background:'#4A148C',color:'white',padding:'15px 25px',borderRadius:'30px'}}>
          Tamil AI Tutor
        </div>
      </div>
    </div>
  )
}

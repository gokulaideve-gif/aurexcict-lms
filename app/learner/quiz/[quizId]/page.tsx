export default function QuizPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Tamil Quiz</h1>
        <p>Test your knowledge</p>
      </div>
      <div style={{padding:'40px',maxWidth:'800px',margin:'0 auto'}}>
        <div style={{background:'white',padding:'40px',borderRadius:'12px'}}>
          <h2 className="tamil">கேள்வி 1</h2>
          <p>வணக்கம் என்பதன் ஆங்கில மொழி என்ன?</p>
          <div style={{marginTop:'20px'}}>
            {['Hello','Goodbye','Thank you','Welcome'].map(opt=>(
              <div key={opt} style={{padding:'15px',border:'1px solid #ddd',borderRadius:'8px',margin:'10px 0',cursor:'pointer'}}>{opt}</div>
            ))}
          </div>
          <button style={{marginTop:'30px',padding:'15px 30px',background:'#4A148C',color:'white',border:'none',borderRadius:'8px'}}>Submit Answer</button>
        </div>
      </div>
    </div>
  )
}

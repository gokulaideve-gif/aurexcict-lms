export default function LearnerHome() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Vanakkam, Priya! 👋</h1>
        <p>Streak 🔥 7 days | Tamil Learning App</p>
      </div>
      <div style={{padding:'20px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'16px',marginBottom:'20px',boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>
          <h2>Continue Learning</h2>
          <h3 className="tamil" style={{fontSize:'24px'}}>Tamil Basics Lesson 6 of 12</h3>
          <div style={{background:'#eee',height:'8px',borderRadius:'4px',margin:'20px 0'}}>
            <div style={{background:'#4A148C',height:'100%',width:'50%',borderRadius:'4px'}}></div>
          </div>
          <button style={{padding:'15px 30px',background:'#4A148C',color:'white',border:'none',borderRadius:'8px',fontSize:'18px'}}>Continue Learning</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'20px'}}>
          <div style={{background:'white',padding:'20px',borderRadius:'12px'}}>Upcoming Live Class: Today 7 PM</div>
          <div style={{background:'white',padding:'20px',borderRadius:'12px'}}>Attendance: 94%</div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div>
      <div style={{background:'linear-gradient(135deg,#4A148C,#7B1FA2)',color:'white',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'48px'}}>Modern Technology for Tamil Language and Culture</h1>
        <p style={{fontSize:'20px',marginTop:'20px'}}>AUREXCICT LMS - TECHTAMIZHA</p>
        <div style={{marginTop:'40px',display:'flex',justifyContent:'center',gap:'30px'}}>
          {['Admin Control Center','Organizer Studio','Learner App'].map(role=>(
            <div key={role} style={{background:'rgba(255,255,255,0.1)',padding:'30px',borderRadius:'12px',width:'250px'}}>
              <h3>{role}</h3>
              <p>Specialized UI for {role.split(' ')[0].toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{padding:'60px 20px',textAlign:'center'}}>
        <h2>Zero Cost for CICT</h2>
        <p>Vercel + Supabase + Cloudinary + LiveKit Free + Sarvam AI + Groq AI</p>
      </div>
    </div>
  )
}

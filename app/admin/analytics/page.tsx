export default function AnalyticsPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Analytics & Reports</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px',marginBottom:'40px'}}>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Total Learners</h3>
            <p style={{fontSize:'36px',color:'#4A148C'}}>2,400</p>
          </div>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Active Workshops</h3>
            <p style={{fontSize:'36px',color:'#4A148C'}}>24</p>
          </div>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Avg Attendance</h3>
            <p style={{fontSize:'36px',color:'#4A148C'}}>94%</p>
          </div>
          <div style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
            <h3>Certificates Issued</h3>
            <p style={{fontSize:'36px',color:'#4A148C'}}>1,850</p>
          </div>
        </div>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>Zero Cost Architecture</h3>
          <p>Platform built with free tiers: Vercel + Supabase + Cloudinary + LiveKit + Sarvam AI + Groq AI</p>
        </div>
      </div>
    </div>
  )
}

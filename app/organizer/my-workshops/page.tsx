export default function MyWorkshops() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>My Workshops</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {['Tamil Basics','Advanced Tamil','Tamil Literature'].map(ws=>(
            <div key={ws} style={{background:'white',padding:'30px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
              <h3>{ws}</h3>
              <p>Learners: 48</p>
              <p>Status: Active</p>
              <button style={{marginTop:'15px',padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>Manage</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

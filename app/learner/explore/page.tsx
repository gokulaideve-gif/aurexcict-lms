export default function ExplorePage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Explore</h1>
        <p>Discover new courses and workshops</p>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {['Tamil Poetry Basics','Tamil Writing','Tamil Culture'].map(course=>(
            <div key={course} style={{background:'white',padding:'30px',borderRadius:'12px',textAlign:'center'}}>
              <div style={{height:'150px',background:'#f0f0f0',borderRadius:'8px',marginBottom:'15px'}}></div>
              <h3>{course}</h3>
              <p>⭐ 4.8 • 1200 learners</p>
              <button style={{marginTop:'15px',padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>Enroll</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Library() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Digital Library</h1>
      </div>
      <div style={{padding:'20px'}}>
        <div style={{display:'flex',gap:'10px',marginBottom:'20px',flexWrap:'wrap'}}>
          {['Tamil Literature','Stories','History','Culture','Beginner Tamil','Poetry','Grammar'].map(cat=>(
            <span key={cat} style={{padding:'8px 16px',background:'#fff',border:'1px solid #ddd',borderRadius:'20px',cursor:'pointer'}}>{cat}</span>
          ))}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'20px'}}>
          {[1,2,3,4,5,6].map(i=>(
            <div key={i} style={{background:'white',padding:'15px',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.1)',textAlign:'center'}}>
              <div style={{height:'200px',background:'#f0f0f0',borderRadius:'8px',marginBottom:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>Book Cover</div>
              <h4>Tamil Book {i}</h4>
              <p style={{color:'#666'}}>Author Name</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

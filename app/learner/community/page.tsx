export default function CommunityPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Community</h1>
        <p>Connect with fellow learners</p>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'12px',marginBottom:'20px'}}>
          <h3>Recent Discussions</h3>
          <div style={{marginTop:'20px'}}>
            {['Tamil Grammar Tips', 'Best Learning Resources', 'Live Class Feedback'].map(topic=>(
              <div key={topic} style={{padding:'15px',borderBottom:'1px solid #eee'}}>{topic}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

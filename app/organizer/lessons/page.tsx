export default function OrganizerLessons() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Lessons Management</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {['Lesson 1: Introduction','Lesson 2: Alphabets','Lesson 3: Greetings'].map(lesson=>(
            <div key={lesson} style={{background:'white',padding:'30px',borderRadius:'12px'}}>
              <h3>{lesson}</h3>
              <p>Status: Published</p>
              <button style={{marginTop:'15px',padding:'10px 20px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

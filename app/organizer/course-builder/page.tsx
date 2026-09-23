export default function CourseBuilder() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Course Builder</h1>
        <p>Autosaved 2 mins ago</p>
      </div>
      <div style={{display:'flex',height:'calc(100vh - 80px)'}}>
        <div style={{width:'300px',background:'#f5f5f5',padding:'20px',overflowY:'auto'}}>
          <h3>Course Structure</h3>
          <div style={{marginTop:'20px'}}>
            <div style={{background:'white',padding:'15px',borderRadius:'8px',margin:'5px 0'}}>
              <strong>Module 1: Basics</strong>
              <div style={{marginLeft:'20px',marginTop:'10px'}}>
                <div style={{padding:'8px',background:'#f0f0f0',margin:'3px 0'}}>Lesson 1: Introduction</div>
                <div style={{padding:'8px',background:'#f0f0f0',margin:'3px 0'}}>Lesson 2: Alphabets</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{flex:'1',padding:'20px'}}>
          <input placeholder="Lesson Title" style={{width:'100%',padding:'12px',fontSize:'20px',marginBottom:'20px'}}/>
          <textarea placeholder="Content Tamil" style={{width:'100%',height:'200px',padding:'12px'}}/>
          <div style={{marginTop:'20px'}}>
            <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px'}}>Upload Video to Cloudinary</button>
          </div>
        </div>
        <div style={{width:'250px',background:'#f5f5f5',padding:'20px'}}>
          <h3>Properties</h3>
          <p>Status: Draft</p>
          <p>Duration: 60 min</p>
          <p>Completion: 75%</p>
        </div>
      </div>
    </div>
  )
}

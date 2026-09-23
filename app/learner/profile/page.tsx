export default function LearnerProfile() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>My Profile</h1>
      </div>
      <div style={{padding:'40px',maxWidth:'800px'}}>
        <div style={{background:'white',padding:'40px',borderRadius:'12px',textAlign:'center'}}>
          <div style={{width:'100px',height:'100px',background:'#ddd',borderRadius:'50%',margin:'0 auto 20px'}}></div>
          <h2>Priya Raman</h2>
          <p>Tamil Level: Intermediate</p>
          <p>Native Language: Tamil</p>
          <div style={{marginTop:'30px',textAlign:'left'}}>
            <h3>Progress</h3>
            <p>Overall Attendance: 94%</p>
            <p>Courses Completed: 3</p>
            <p>Certificates Earned: 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

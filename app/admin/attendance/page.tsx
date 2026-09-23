export default function AdminAttendance() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Attendance Overview</h1>
      </div>
      <div style={{padding:'40px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>Global Attendance Statistics</h3>
          <div style={{marginTop:'30px'}}>
            <div style={{marginBottom:'20px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
                <span>Above 90%</span>
                <span>65%</span>
              </div>
              <div style={{background:'#eee',height:'10px',borderRadius:'5px'}}>
                <div style={{background:'green',height:'100%',width:'65%',borderRadius:'5px'}}></div>
              </div>
            </div>
            <div style={{marginBottom:'20px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
                <span>Below 90%</span>
                <span>20%</span>
              </div>
              <div style={{background:'#eee',height:'10px',borderRadius:'5px'}}>
                <div style={{background:'orange',height:'100%',width:'20%',borderRadius:'5px'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AttendanceChart() {
  const data = [
    { range: 'Above 90%', value: 65 },
    { range: 'Below 90%', value: 20 },
    { range: 'Absent', value: 10 },
    { range: 'Completed', value: 5 }
  ];
  
  return (
    <div style={{background:'white',padding:'20px',borderRadius:'12px'}}>
      <h3>Attendance Overview</h3>
      <div style={{marginTop:'20px'}}>
        {data.map(item => (
          <div key={item.range} style={{marginBottom:'15px'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'5px'}}>
              <span>{item.range}</span>
              <span>{item.value}%</span>
            </div>
            <div style={{background:'#eee',height:'8px',borderRadius:'4px',overflow:'hidden'}}>
              <div style={{background:'#4A148C',height:'100%',width:`${item.value}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

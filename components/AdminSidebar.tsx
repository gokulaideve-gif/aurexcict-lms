export default function AdminSidebar() {
  const items = [
    'Dashboard',
    'Trainees',
    'Organizers',
    'Workshops',
    'Courses',
    'Live Sessions',
    'Attendance',
    'Certificate Center',
    'Certificate Templates',
    'Library',
    'Communities',
    'Announcements',
    'AI & Knowledge',
    'Reports',
    'Analytics',
    'Settings',
    'Audit Logs'
  ];
  
  return (
    <div style={{width:'250px',background:'white',borderRight:'1px solid #eee',height:'100vh',position:'fixed'}}>
      <div style={{padding:'20px',borderBottom:'1px solid #eee'}}>
        <h2 style={{color:'#4A148C'}}>Admin Control</h2>
      </div>
      <nav style={{padding:'10px 0'}}>
        {items.map(item => (
          <div key={item} style={{padding:'12px 20px',cursor:'pointer',hover:{background:'#f5f5f5}'}}>{item}</div>
        ))}
      </nav>
    </div>
  );
}

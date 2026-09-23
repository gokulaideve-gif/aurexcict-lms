export default function OrganizerSidebar() {
  const items = [
    'My Dashboard',
    'My Workshops',
    'Course Builder',
    'Lessons',
    'Live Classes',
    'Learners',
    'Attendance',
    'Quizzes',
    'Assignments',
    'Resources',
    'Announcements',
    'Certificates',
    'Communities',
    'Reports'
  ];
  
  return (
    <div style={{width:'250px',background:'#fff8e1',borderRight:'1px solid #ddd'}}>
      <div style={{padding:'20px'}}>
        <h2 style={{color:'#4A148C'}}>Course Studio</h2>
      </div>
      <nav>
        {items.map(item => (
          <div key={item} style={{padding:'12px 20px'}}>{item}</div>
        ))}
      </nav>
    </div>
  );
}

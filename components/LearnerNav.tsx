export default function LearnerNav() {
  const items = [
    { icon: '🏠', label: 'Home' },
    { icon: '📚', label: 'My Learning' },
    { icon: '🎥', label: 'Live Classes' },
    { icon: '🔍', label: 'Explore' },
    { icon: '📖', label: 'Library' },
    { icon: '🤖', label: 'AI Tutor' },
    { icon: '👥', label: 'Community' },
    { icon: '🏆', label: 'Certificates' },
    { icon: '👤', label: 'Profile' }
  ];
  
  return (
    <div style={{
      position:'fixed',
      bottom:0,
      left:0,
      right:0,
      background:'white',
      borderTop:'1px solid #eee',
      display:'flex',
      justifyContent:'space-around',
      padding:'10px 0'
    }}>
      {items.map(item => (
        <div key={item.label} style={{textAlign:'center',padding:'5px'}}>
          <div style={{fontSize:'20px'}}>{item.icon}</div>
          <div style={{fontSize:'10px'}}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

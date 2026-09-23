export default function LoginPage() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#4A148C'}}>
      <div style={{background:'white',padding:'40px',borderRadius:'12px',width:'400px'}}>
        <h1 style={{color:'#4A148C',textAlign:'center'}}>Aurexcict LMS</h1>
        <p style={{textAlign:'center',color:'#666'}}>TECHTAMIZHA - AUREX26</p>
        <form style={{marginTop:'30px'}}>
          <input placeholder="Email" style={{width:'100%',padding:'12px',margin:'10px 0',border:'1px solid #ddd',borderRadius:'6px'}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:'12px',margin:'10px 0',border:'1px solid #ddd',borderRadius:'6px'}}/>
          <button style={{width:'100%',padding:'12px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginTop:'20px'}}>Sign In</button>
        </form>
      </div>
    </div>
  )
}

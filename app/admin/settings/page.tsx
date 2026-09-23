export default function SettingsPage() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Platform Settings</h1>
      </div>
      <div style={{padding:'40px',maxWidth:'800px'}}>
        <div style={{background:'white',padding:'30px',borderRadius:'12px'}}>
          <h3>System Configuration</h3>
          <div style={{marginTop:'20px'}}>
            <p><strong>Platform:</strong> aurexcictlms.in</p>
            <p><strong>Stack:</strong> Vercel + Supabase + Cloudinary + LiveKit</p>
            <p><strong>AI:</strong> Sarvam AI + Groq AI</p>
            <p><strong>Cost:</strong> ₹0 for CICT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

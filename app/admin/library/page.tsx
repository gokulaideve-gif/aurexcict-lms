export default function AdminLibrary() {
  return (
    <div>
      <div style={{background:'#4A148C',color:'white',padding:'20px'}}>
        <h1>Library Management</h1>
      </div>
      <div style={{padding:'40px'}}>
        <button style={{padding:'12px 24px',background:'#4A148C',color:'white',border:'none',borderRadius:'6px',marginBottom:'20px'}}>Upload Book</button>
        <table style={{width:'100%',background:'white',borderRadius:'12px',overflow:'hidden'}}>
          <thead style={{background:'#f8f9fa'}}>
            <tr>
              <th style={{padding:'15px'}}>Title</th>
              <th style={{padding:'15px'}}>Author</th>
              <th style={{padding:'15px'}}>Category</th>
              <th style={{padding:'15px'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding:'15px'}}>Tamil Literature Classics</td>
              <td style={{padding:'15px'}}>Various</td>
              <td style={{padding:'15px'}}>Literature</td>
              <td style={{padding:'15px',color:'green'}}>Published</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

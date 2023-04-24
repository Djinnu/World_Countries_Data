import React from 'react'

const Footer = () => {
  return (
    <footer style={{textAlign:'center', padding:'4rem', backgroundColor: '#ffcdd2', marginTop:'3rem'}}>
        <p style={{fontSize:'28px', marginBottom:'1rem'}}>©Copyright {new Date().getFullYear()} React Challenge</p>
        <p style={{fontWeight:100}}>Designed and Built by <a href='#'>Janar Pärn</a></p>
    </footer>
  )
}

export default Footer
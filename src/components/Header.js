import React from 'react'

const headerStyles = {
    textAlign: 'center',
    backgroundColor: '#ffcdd2',
    padding: '2rem' 
}

const Header = ({data}) => {
  return (
    <div style={headerStyles}>
        <h1 style={{color:'#e65100', fontSize:40, marginBottom:'2rem'}}>World Countries Data</h1>
        <h3>Currently, we have {data.length} countries</h3>
    </div>
  )
}

export default Header
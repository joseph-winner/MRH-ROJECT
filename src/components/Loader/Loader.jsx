import React from 'react'
import "./Loader.css"

export default function Loader() {
  return (
    <div style={{display:'flex', justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
        <p>Loading</p>
        <div className='double-up'></div>
    </div>
  )
}

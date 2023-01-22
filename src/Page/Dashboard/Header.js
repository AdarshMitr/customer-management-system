import React from 'react'

export default function Header({setIsAdding}) {
  return (
    <header>
      <h1>Customer Management Software</h1>
      <div>
        <button onClick={()=>setIsAdding(true)} className='round-button'>Add Button</button>
      </div>
      </header>
  )
}

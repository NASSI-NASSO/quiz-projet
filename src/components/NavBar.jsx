import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
        <nav className='navBar'>
            <div className='topnav'>
                 <Link  className='active'  to='/'> HOME</Link>
                 <Link to='/Quiz'>QUIZ</Link>
                 <Link to='/Result'>RESULT</Link>
            </div>
        </nav>
        
    
  )
}

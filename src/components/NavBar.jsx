import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='topnav'>
        <nav className='navBar'>
            <ul className=''>
                <li> <Link to='/'> HOME</Link></li>
                <li> <Link to='/Quiz'>QUIZ</Link></li>
                <li> <Link to='/Result'>RESULT</Link></li>
            </ul>
        </nav>
        
    </div>
  )
}

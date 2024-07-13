import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <nav className='navbar1'>
        <Link to='/'><h1>AuthDB</h1></Link>
        <ul>
            {isUserSignedIn ? (
                <>
                <Link to='/account'><li>Account</li></Link>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
                </>
            ) : (
                <>
                <Link to='/'><li>Login</li></Link>
                <Link to='/signup'><li>Signup</li></Link>
                </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar
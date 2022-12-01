import React, {useState} from 'react'
import './NavbarStyles.css'

import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'

import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav,setNav] = useState(false)
  const handleNav = () => setNav (!nav)
  return (
    <div name='top' className='navbar'>
      <div className="container">
        <div className="logo">
          <SiDatabricks className='icon' />
          <h1>Encrypted.</h1>
        </div>
        <ul className={nav ? 'nav-menu active':'nav-menu'}>
          <Link to='top' smooth={true} duration={500}><li>Home</li></Link>
          <Link to='recovery' smooth={true} duration={500}><li>Recovery</li></Link>
          <Link to='cloud' smooth={true} duration={500}><li>Cloud</li></Link>
          <Link to='contact' smooth={true} duration={500}><li>Contact</li></Link>
          <button>Sign in</button>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar
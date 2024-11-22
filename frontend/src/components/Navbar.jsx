import React from 'react';
import assets from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src= {assets} alt="testing" />
      <ul>
        <NavLink>
            <li>HOME</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>ABOUT</li>
            <hr/>
        </NavLink>
        <NavLink>
            <li>CONTACT</li>
            <hr/>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar

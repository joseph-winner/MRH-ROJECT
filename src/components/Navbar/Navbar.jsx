import React from 'react'
import UserLocation from './Userlocation'
import { FaBars, FaUser } from 'react-icons/fa'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-container'>
        <nav>
            <div className="current-user-location-main">
                <UserLocation />
            </div>
            <div className="nav-items-lists">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Malaria Cases</a></li>
                    <li><a href="/">Report</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="nav-buttons">
                <div className="user-profile-pic">
                    <p><FaUser /></p>
                </div>
                <div className="humberger-btn">
                    <p><FaBars /></p>
                </div>
            </div>
        </nav>
    </div>
  )
}

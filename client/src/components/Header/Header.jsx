import React from 'react'
import "./Header.css"
import NetflixLogo from "../../assets/images/netflix.png"

function Header() {
  return (
    <>
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            <li><img src={NetflixLogo} alt="NetflixLogo" width="100" /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div>
          <ul>

          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo2.png'

const Header = () => {
  return (
    <div className="d-flex" style={{ justifyContent: "center", height:"100px" }}>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" height="28px" width="275px" />
        </Link>
      </nav>
    </div>
  )
}

export default Header;
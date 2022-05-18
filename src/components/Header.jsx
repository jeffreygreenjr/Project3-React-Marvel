import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
        <nav className="NavBar">
          <Link className="NavLink" to="/marvel">MARVEL</Link>
        </nav>
    </div>
  )
}

export default Header
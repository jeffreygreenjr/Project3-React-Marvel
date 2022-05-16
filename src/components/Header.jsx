import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="NavBar">
          <Link className="HomeLink" to="/marvel">MARVEL</Link>
        </nav>
    </div>
  )
}

export default Header
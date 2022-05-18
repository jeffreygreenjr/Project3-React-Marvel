import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComicsList from './ComicsList';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
        <Header />
        <div className="HomePageLinkContainer">
        <Link className="HomePageLinks" to="/marvel/characters">
            <h4>CHARACTERS</h4>
        </Link>
        <span className="span"> | </span>
        <Link className="HomePageLinks" to="/marvel/comics">
            <h4>COMICS</h4>
        </Link>
        </div>
        <Footer />  
    </div>
  )
}

export default HomePage
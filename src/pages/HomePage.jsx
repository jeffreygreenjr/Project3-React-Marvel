import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComicsList from './ComicsList';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
        <Header />
        <h1>HomePage</h1>
        <Link to="/marvel/characters">
            <h4>CHARACTERS</h4>
        </Link>
        <Link to="/marvel/comics">
            <h4>COMICS</h4>
        </Link>
        <Footer />  
    </div>
  )
}

export default HomePage
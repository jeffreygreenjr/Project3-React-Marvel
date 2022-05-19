import '../App.css';
import React from 'react'
import GithubLogo from '../Assets/GitHub-Mark-Light-32px.png'
import LinkedInLogo from '../Assets/linkedin-3-xxl.png'

function Footer() {
  return (
    <div className="Footer">
        <div className="FooterContainer">
        <a href="https://github.com/jeffreygreenjr">
          <img className="FooterGHImg" src={GithubLogo} alt="Github"/>
        </a>
        <p className="FooterText">Developed by Jeffrey Green</p>
        <a href="https://www.linkedin.com/in/jeffreygreenjr/">
          <img className="FooterLIImg" src={LinkedInLogo} alt="Github"/>
        </a>
        </div>
    </div>
  )
}

export default Footer
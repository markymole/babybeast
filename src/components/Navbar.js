import React, { useState, useEffect } from 'react';
import logo from '../assets/logos/BB-WLogo.png';
import logo2 from '../assets/logos/BABYBEAST.png';
import discord from '../assets/icons/discord.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showLinks, setShowLink] = useState(false);
  const [showDLogo, setLogo] = useState(false);
  
  const svgs = [
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>, <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
  ]

  const closeMobileMenu = () => setShowLink(false)
  const showButton = () => {
    if(window.innerWidth > 1000){
      setShowLink(false);
    }
  }

  const showLogo = () => {
    if(window.innerWidth > 1000){
      setLogo(true);
    }
    else{
      setLogo(false)
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  useEffect(() => {
    showLogo();
  }, [])

const goTop = () => {
  window.scrollTo(0, 0);
}

  window.addEventListener('resize', showButton);
  window.addEventListener('resize', showLogo);
  return (
    <>
      <nav className='navbar' id="nav-container">
        <div className='menu' >
          <button onClick={() => setShowLink(!showLinks)}>
            {showLinks ? svgs[1] : svgs[0]}
          </button>
        </div>
        <div className='leftpart ' id={showLinks ? "hidden" : ""} >
            <li className='nav-item'>
              <Link
                to='/mint'
                className='nav-links'
                id='hover-left'
                onClick={closeMobileMenu}
              >
                MINT |
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/toybox'
                className='nav-links'
                id='hover-left'
                onClick={closeMobileMenu}
              >
                TOYBOX |
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/merchandise'
                className='nav-links'
                id='hover-left'
                onClick={closeMobileMenu}
              >
                MERCHANDISE |
              </Link>
            </li>
            <li className='nav-item' id="li-wallet">
              <Link
                to='/'
                className='nav-links'
                id='hidden-wallet'
                onClick={closeMobileMenu}
              >
                CONNECT WALLET
              </Link>
            </li>
        </div>
        <div className='midpart'>
          <Link to='/home' onClick={closeMobileMenu}><img src={showDLogo? logo : logo2} alt="BabyBeast" onClick={goTop}/></Link>
        </div>
        <div className='rightpart'>
          <div className="socials">
            <a href='/'><img src={discord} alt="Discord" className='icon' /></a>
            <a href='/'><img src={instagram} alt="Instagram" className='icon' /></a>
            <a href='/'><img src={twitter} alt="Twitter" className='icon' /></a>
          </div>
          <a href="/" className='wallet'>CONNECT WALLET |</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
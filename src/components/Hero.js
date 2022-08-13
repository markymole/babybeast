import React from 'react'
import hero from '../assets/avatars/Rainbow.png';
import footerimg from '../assets/logos/BABYBEASTv2.png';
import logo from '../assets/logos/BB-WLogo.png';
import './Hero.css';

const Hero = () => {
  return (
    <>
       <div className='hero-section'>
          <div className="container-fluid mid-section">
            <img src={hero} alt="Rainbow" className='hero-avatar'/>
            <h1 className='heading' id='title'>BABYBEAST</h1>
            <h5 className='sub-heading' id='sub-title'>NFT. STREETWEAR.</h5>
            <p className="low-heading" id='cc'>REPRESENTING THE DISTINCTIVE AND MAGNIFICENT BEASTS IN THE MULTI-VERSE WE PRESENT A
            COLLECTION FUTURISTIC EVOLUTIONARY NFT STREETWEAR ARTWORK BABY BEAST</p>
            <h5 className='sub-heading'>MINT INFO</h5>
            <p className='low-heading' id='ccc'>[APR-MAY]
            ETH [XXX]</p>
          </div>

            <div className='hero-footer'>
                <div className="marquee">
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change' />
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change' />
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>

                </div>
            </div>
              
        </div>
    </>
  )
}

export default Hero

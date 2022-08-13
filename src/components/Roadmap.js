import React, { useState, useEffect } from 'react';
import Alpha from '../assets/alpha.png';
import Beta from '../assets/beta.png';
import Gamma from '../assets/gamma.png';
import Delta from '../assets/Delta.png';
import Logo from '../assets/logos/BB-WLogo.png';
import ScrollAnimation from 'react-animate-on-scroll';

import './Roadmap.css';

const Roadmap = () => {

  const [nextSlide, setNextSlide] = useState(false);
  const [isMobile, setMobile] = useState(true);

  const checkMobile = () => {
    if(window.innerWidth < 1000){
      setMobile(false);
    }
    else{
        setMobile(true)
    }
  }
  
  useEffect(() => {
    checkMobile();
  }, [])
  window.addEventListener('resize', checkMobile);
  const openSlide = () => setNextSlide(true)
  const prevSlide = () => setNextSlide(false)

  return (
    <>  
        <div className='whole-road' id={nextSlide? 'hidden' : ''}>
                <div className={isMobile ? 'mobile-off' : 'mobile-on'}>
                    <div className="upper">
                        <h5>Season 1</h5>
                        <h1 className='glow'>Year 2022</h1>
                        <p>Realistic Targets, Exciting Prospects</p>
                        <h2>Roadmap</h2>
                    </div>
                    <div className='right-button' id=''>
                        <button onClick={openSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "70" : "30"} height={isMobile ? "70" : "30"} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="roadmap" id={nextSlide? 'hidden' : ''}>
                    <div className="maps">
                        <ScrollAnimation animateIn='fadeIn'>
                        <img src={Alpha} alt="" id='alpha'/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                        <img src={Beta} alt="" id='beta'/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                        <img src={Gamma} alt="" id='gamma'/>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                        <img src={Delta} alt="" id='delta'/>
                        </ScrollAnimation>
                    </div>
                    <div className="lines">
                        <span className='vertical-line' id='fist-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='second-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='third-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='fourth-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='fifth-line'></span>
                    </div>
                    <div className="map-desc">
                        <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='description'>
                            <h1 className='head-2'>PRODUCTION & FULFILLMENT OF THE ORIGINALS</h1>
                            <h5 className='subhead'>Exclusive apparels for all our BABYBEAST owners</h5>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='description'>
                            <h1 className='head-2'>COMMENCEMENT OF PERIODIC MERCH DROPS</h1>
                            <h5 className='subhead'>Limited BABYBEAST Apparel sales</h5>
                            <h1 className='head-2' id='head-2'>LAUNCH OF THE "TOYBOX"</h1>
                            <h5 className='subhead'>A depository for airdrops, lucky draw prized, Ownders' Merchandise Royalties</h5>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='description'>
                            <h1 className='head-2'>FULFILLMENT & CONTINUATION OF MERCH DROPS</h1>
                            <h5 className='subhead'>Most, if not all BABYBEASTS to be in the Merch Drops</h5>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeInLeft'>
                        <div className='description'>
                            <h1 className='head-2'>DEEPENING MARKET PENETRATION</h1>
                            <h5 className='subhead'>Streetwear collaborations, new apparels</h5>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <div className="year">
                        <div className="upper">
                            <h1 className='glow'>Year 2022</h1>
                            <h5>Season 1</h5>
                        </div>
                        <div className='right-button' id=''>
                            <button onClick={openSlide}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "70" : "30"} height={isMobile ? "70" : "30"} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='lower'>
                            <h1>Roadmap</h1>
                            <h5>Realistic Targets, Exciting Prospects</h5>
                        </div>
                    </div>
            </div>
        </div>

        <div className='whole-road-2' id={nextSlide? 'not-hidden': 'hide'}>
                <div className={isMobile ? 'mobile-off' : 'mobile-on'}>
                    <div className='center-text'>
                            <h3>EACH SEASON BETTER THAN BEFORE</h3>
                    </div>  
                    <div className="upper">
                        <h5>Season 2</h5>
                        <h1 className='glow'>Year 2022</h1>
                        <p>Stay Tuned</p>
                        <h2>Roadmap</h2>
                    </div>
                    <div className='right-button'>
                        <button onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile? "70" : "30"} height={isMobile? "70" : "30"} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            <div className='roadmap-2' id={nextSlide? 'not-hidden': 'hide'} >
                    <div className='left-button' id={isMobile? 'not-prev' : 'prev'}>
                        <button onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile? "70" : "30"} height={isMobile? "70" : "30"} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="maps-2">
                        <img src={Alpha} alt="" id='alpha'/>
                        <img src={Beta} alt="" id='beta'/>
                        <img src={Gamma} alt="" id='gamma'/>
                        <img src={Delta} alt="" id='delta'/>
                    </div>
                    <div className="lines" id='line-2'>
                        <span className='vertical-line' id='fist-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='second-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='third-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='fourth-line'></span>
                        <img src={Logo} alt="" />
                        <span className='vertical-line' id='fifth-line'></span>
                    </div>
                    <div className="map-desc-2">
                        <div className='description'>
                            <h1 className='head'>PRODUCTION & FULFILLMENT OF THE ORIGINALS</h1>
                            <h5 className='subhead'>Exclusive apparels for all our BABYBEAST owners</h5>
                        </div>
                        <div className='description'>
                            <h1 className='head'>COMMENCEMENT OF PERIODIC MERCH DROPS</h1>
                            <h5 className='subhead'>Limited BABYBEAST Apparel sales</h5>
                            <h1 className='head' id='head-2'>LAUNCH OF THE "TOYBOX"</h1>
                            <h5 className='subhead'>A depository for airdrops, lucky draw prized, Ownders' Merchandise Royalties</h5>
                        </div>
                        <div className='description'>
                            <h1 className='head'>FULFILLMENT & CONTINUATION OF MERCH DROPS</h1>
                            <h5 className='subhead'>Most, if not all BABYBEASTS to be in the Merch Drops</h5>
                        </div>
                        <div className='description'>
                            <h1 className='head'>DEEPENING MARKET PENETRATION</h1>
                            <h5 className='subhead'>Streetwear collaborations, new apparels</h5>
                        </div>
                    </div>
                    <div className="year" id="year-2">
                        <div className="upper">
                            <h1 className='glow'>Year 2023</h1>
                            <h5>Season 2</h5>
                        </div>
                        <div className='center-text'>
                            <h3>EACH SEASON BETTER THAN BEFORE</h3>
                        </div>
                        <div className='lower' id="lower-2">
                            <h1>Roadmap</h1>
                            <h5 id='lower5'>Stay Tuned</h5>
                        </div>
                    </div>
                </div>    
        </div>
      
      
      
    </>
  )
}

export default Roadmap

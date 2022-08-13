import React, {useState, useEffect} from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Helmet } from 'react-helmet';
import './Toybox.css';

const Toybox = () => {

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

  const [isClick, setClick] = useState(false);
  const [isClick2, setClick2] = useState(false);
  const [isClick3, setClick3] = useState(false);
  const [isClick4, setClick4] = useState(false);
  const [isClick5, setClick5] = useState(false);

  const closer = () => {
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  }

  const closer2 = () => {
    setClick(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  }

  const closer3 = () => {
    setClick(false);
    setClick2(false);
    setClick4(false);
    setClick5(false);
  }

  const closer4 = () => {
    setClick(false);
    setClick2(false);
    setClick3(false);
    setClick5(false);
  }

  const closer5 = () => {
    setClick(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
  }

  const isClicked = () => setClick(!isClick)
  const isClicked2 = () => setClick2(!isClick2)
  const isClicked3 = () => setClick3(!isClick3)
  const isClicked4 = () => setClick4(!isClick4)
  const isClicked5 = () => setClick5(!isClick5)



  const svgs = [
    <svg xmlns="http://www.w3.org/2000/svg" width={isMobile? "30": "15"} height={isMobile? "30": "15"} fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>, <svg xmlns="http://www.w3.org/2000/svg" width={isMobile? "30": "15"} height={isMobile? "30": "15"} fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
  ]

  return (
    <>
      <Helmet>
        <title>BABYBEAST, toddled the vast multiverse</title>
        <meta name='description' content='BABYBEAST is a digital collectible game with an immersive and hand-crafted universe, that
      allows players to discover new digital beings and embark on the ultimate journey of NFT
      ownership.'/>
      <meta name='keywords' content='BabyBeast, BABYBEAST, NFT, Toybox'/>
      </Helmet>
      <div className="toybox">
        <h1>TOYBOX FAQ</h1>
        <div id="background">
              <p>TOYBOX</p>
              <p>TOYBOX</p>
              <p>TOYBOX</p>
              <p>TOYBOX</p>
       </div>
        <div className='faqs'>
          <div className='toybox-left'>
            <div className='accordion'>
              <h5 className='accordion-head' onClick={() => {isClicked(); closer();}}>WHAT IS A BABYBEAST TOY BOX? <button>
                {isClick ? svgs[1] : svgs[0]}
              </button></h5>
              <p className='accordion-body' id={isClick? 'not-hide' : 'hide'}>Every Babybeast owner will have access to the Toybox which essentially encompasses rewards like contest prizes, air drops and OMR profits (See description for OMR). </p>
            </div>
            <div className='accordion'>
              <h5 className='accordion-head' onClick={() => {isClicked2(); closer2()}}>HOW DO I GET MY BABYBEAST IN THE PERIODIC MERCHANDISE SALE?<button>
                {isClick2 ? svgs[1] : svgs[0]}
              </button></h5>
              <p className='accordion-body' id={isClick2? 'not-hide' : 'hide'}>All Babybeast Owners stand a chance to win a spot in our periodic merchandise sale. This will be selected through raffles, community contest, and many other exciting activities. Needless to say, increased participation will add more to your Toybox! </p>
            </div>
            <div className='accordion'>
              <h5 className='accordion-head' onClick={() => {isClicked3(); closer3()}}>HOW DO I GET MY BABYBEAST INVOLVED IN THE MERCHANDISE SALE??<button >
                {isClick3 ? svgs[1] : svgs[0]}
              </button></h5>
              <p className='accordion-body' id={isClick3? 'not-hide' : 'hide'}>The Merchandise sale will be held periodically and the designs will be selected through contests, raffles and other captivating activities among the Babybeast community. The Babybeast community is the cornerstone to the success of the Merchandise Sale, create awareness and spread the word! 
We envision the Merchandise Sale to be done in limited releases within a limited timeframe. Our Team is working on the specifics and will post conclusive details in our channel.</p>
            </div>
            <div className='accordion'>
              <h5 className='accordion-head' onClick={() => {isClicked4(); closer4()}}>WHAT IF I AM NOT SELECTED?<button >
                {isClick4 ? svgs[1] : svgs[0]}
              </button></h5>
              <p className='accordion-body' id={isClick4? 'not-hide' : 'hide'}>There will be a series of Merchandise Sale launches. Babybeast owners stand a chance to participate in the next sale with a higher probability as repeated designs will not be featured. Rest assured, we want every Babybeast to have the fame and attention that it is due.</p>
            </div>
            <div className='accordion'>
              <h5 className='accordion-head' onClick={() => {isClicked5(); closer5()}}>HOW DO I GET MY MERCHANDISE SOLD DURING A FLASH SALE?<button >
                {isClick5 ? svgs[1] : svgs[0]}
              </button></h5>
              <p className='accordion-body' id={isClick5? 'not-hide' : 'hide'}>The Team’s resident artist (A.K.A The Vandal) will work with the design and production team to feature and incorporate the shortlisted Babybeast into the streetwear apparel. Sneak peaks will be released before and during the sale. 
All Merchandise Sales will be conducted through Babybeast’s official merch website. 
Spread the word, promote your Babybeast, then kick your feet up and wait for the Cradle to reap your rewards! We’ll do the rest.</p>
            </div>
            
          </div>
          <div className="toybox-right">
              {/* <div id="background">
              <p>TOYBOX</p>
              <p>TOYBOX</p>
              <p>TOYBOX</p>
              <p>TOYBOX</p>
              
              </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile? "200": "70"} height={isMobile? "200": "70"}fill="currentColor" className="bi bi-box2" viewBox="0 0 16 16">
              <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z"/>
            </svg>
            <h4>COMING SOON</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Toybox

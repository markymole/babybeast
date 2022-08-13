import React, {useState, useEffect} from 'react'
import FirstAvatar from '../assets/avatars2/Barley Bae.png';
import SecondAvatar from '../assets/avatars2/Brad BB.png';
import ThirdAvatar from '../assets/avatars2/BabySitters - Hunnyxxboo.png';
import FourthAvatar from '../assets/avatars2/BabySitters - Onyx.png';
import FifthAvatar from '../assets/avatars2/Exasperated Bruce.png';
import './Avatars.css';

const Avatars = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.documentElement.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <>
      <div className='avatar-section'>
        <div className='headings'>
            <h1 id='back-head'>BABYBEAST</h1>
            <h1 id='front-head'>YOU CAN'T TAME THE WILD</h1>
        </div>
        <div className='avatar-container' >
          <div className='avatars'>
            <div className='avatar-one'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
            <div className='avatar-two'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
            <div className='avatar-two'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatars

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

import React from 'react'
import firstAvatar from '../assets/avatars-png/BABYSITTERS - HUNNYXXBOO.png'
import secondAvatar from '../assets/avatars-png/Buck-BB.png'
import fourthAvatar from '../assets/avatars-png/Puddytat.png'
import fifthAvatar from '../assets/avatars-png/Shugapop.png'
import sixthAvatar from '../assets/avatars-png/Onyx.png'
import seventhAvatar from '../assets/avatars-png/MR. GRAY.png'
import bbBackgroundsvg from '../assets/babybeast-warp.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import './ThirdAvatar.css';

const ThirdAvatar = () => {
  //   const [webPixels, setPixels] = useState(4500);

  // const [lscrolled, setScrolled] = useState(0);
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.scrollY;
  //   console.log(scrolled);
  //   if(scrolled > webPixels){
  //     setScrolled(scrolled - webPixels)
  //   }
  //   else{
  //     setScrolled(0)
  //   }
  // });

  // const showPixels = () => {
  //   if(window.innerWidth < 1500){
  //     setPixels(2800);
  //   }
  //   else{
  //     setPixels(3700)
  //   }
  // }

  // useEffect(() => {
  //   showPixels();
  // }, [])

  // window.addEventListener('resize', showPixels);
  return (
    <>
      <div className="third-avatar">
        <ScrollAnimation animateIn='fadeIn'>
        <h1 className='third-title'>BABYSITTERS</h1>
        </ScrollAnimation>
        <div className="avatars-3">
            <ScrollAnimation animateIn='fadeIn' delay={400}>
            <div className='avatar-3'>
                <img src={firstAvatar} alt="HUNNYXXBOO"/>
                <h3>HUNNYXXBOO</h3>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={400}>
            <div className='avatar-3'>
                <img src={fourthAvatar} alt="APPLESPICE"/>
                <h3>PUDDYTAT</h3>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={400}>
            <div className='avatar-3'>
                <img src={fifthAvatar} alt="SKITTLEBUN"/>
                <h3>SHUGAPOP</h3>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={400}>
            <div className='avatar-3'>
                <img src={sixthAvatar} alt="PUDDYTAT"/>
                <h3>ONYX</h3>
            </div>
            </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn='fadeIn'>
        <h1 className='third-title' id='baby-makers'>BABYMAKERS</h1>
        </ScrollAnimation>
        <div>
            <div className='makers-avatar-all'>
                <div className='makers-avatar' id='left-makers-1'>
                    <ScrollAnimation animateIn='fadeIn' delay={400}>
                    <div className='makers-text'>
                        <h3 className='heads'>MR GRAY</h3>
                        <h3 className='sub-head'>THE VANDAL</h3>
                        <h5 className='desc'>With a strong passion for his arts and designs, Mr gray prides himself in his art. Watch as he unfolds babybeast into his world.</h5>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <img src={seventhAvatar} alt="MOHAWKEYE" id='makers-id'/>
                    </ScrollAnimation>
                </div>
                <div className='makers-avatar' id='right-makers-1'>
                    <ScrollAnimation animateIn='fadeIn' delay={400}>
                    <div className='makers-text'>
                        <h3 className='heads'>ALT D</h3>
                        <h3 className='sub-head'>THE HACKER</h3>
                        <h5 className='desc'>A Business analyst by day, Alt D takes web3 in his own hands. With Experiences in programming in the ethereum and solana platform, watch as he unfolds the Dapps for Babybeast.</h5>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <img src={secondAvatar} alt="MOHAWKEYE" id='makers-id'/>
                    </ScrollAnimation>
                </div>
            </div>
            
        </div>
      </div>
      <div className='avatar-bg'>
            <div className="bg-container" >
                <div className="bg-images" id='bg-images2'>
                    <img src={bbBackgroundsvg} alt="Babybeast-warp"  className='bb-background'/>
                </div>
            </div>
      </div>
    </>
  )
}

export default ThirdAvatar

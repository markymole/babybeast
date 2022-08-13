import React from 'react'
import AvatarOne from '../assets/avatars-png/Bruce-BB.png'
import AvatarTwo from '../assets/avatars-png/AppleSpice.png'
import AvatarThree from '../assets/avatars-png/Brad-BB.png'
import ScrollAnimation from 'react-animate-on-scroll';
import bbBackgroundsvg from '../assets/babybeast-warp.svg';
import './SecondAvatar.css';


const SecondAvatar = () => {
  return (
    <>
      <div className="second-avatar" >
          <ScrollAnimation animateIn='fadeIn'>
          <p className='sub-title'>BROUGHT TO YOU BY</p>
          </ScrollAnimation>
          <h1 className='title'>BABYBOSSES</h1>
          <div className='avatars-2' >
            <ScrollAnimation animateIn='fadeIn' delay={100}>
            <div className='avatar-2' id='avatar-one'>
                <img src={AvatarOne} alt="Bruce-BB" />
                <div>
                  <h3 className='heads'>BRUCE B</h3>
                  <h3 className='sub-head'>The Hustler</h3>
                  <h5 className='desc'>Bruce works as a Business consultant. Taking on multiple roles, crafting the strategy, building the team and leveraging on the talents we need to make babybeast successful.</h5>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
            <div className='avatar-2' id='avatar-two'>
                <img src={AvatarTwo} alt="Bruce-BB" />
                <div>
                  <h3 className='heads'>APPLE SPICE</h3>
                  <h3 className='sub-head'>THE NANNY</h3>
                  <h5 className='desc'>A peoples person, love and adored by many, Apple takes the fun in the community to the next Level. Leading her team of baby sitters, you can expect all the love you need in the community.</h5>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
            <div className='avatar-2' id='avatar-three'>
                <img src={AvatarThree} alt="Bruce-BB" />
                <div>
                  <h3 className='heads'>BRICK BEAST</h3>
                  <h3 className='sub-head'>THE HIPSTER GEEK</h3>
                  <h5 className='desc'>Brick is not your average Joe,. Working as a banker by day, he chases his web3 dreams at night. from the artwork and styles carefully curated to  brand babybeast.</h5>
                </div>
                
            </div>
            </ScrollAnimation>
          </div>  
      </div>    
      <div className='avatar-bg'>
            <div className="bg-container">
                <div className="bg-images" id='bg-images1'>
                    <img src={bbBackgroundsvg} alt="Babybeast-warp"  className='bb-background'/>
                </div>
            </div>
      </div>
    </>
  )
}

export default SecondAvatar

// style={{willChange: 'transform', transform: `translate3d(${-lscrolled}px, 0px, 0px)`, transformStyle: 'preserve-3d'}}

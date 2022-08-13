import './Home.css';
import React, {useEffect, Suspense} from 'react';
import Hero from '../Hero';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // const Hero = React.lazy(() => import('../Hero'));
  const Merch = React.lazy(() => import('../Merch'));
  const Avatars = React.lazy(() => import('../Avatars'));
  const Roadmap = React.lazy(() => import('../Roadmap'));
  const SecondAvatar = React.lazy(() => import('../SecondAvatar'));
  const ThirdAvatar = React.lazy(() => import('../ThirdAvatar'));
  const Footer = React.lazy(() => import('../Footer'));
  return (
    <>
      <div className='hero-section' id='hero-section'>
        <Hero />
      </div>
      <Suspense fallback={<div />}>
      <div className='merch-section' id='merch-section'>
        <Merch />
      </div>
      <div className="avatar-section" id='avatar-section'>
        <Avatars />
      </div>
      <div className="roadmap" id='roadmap=section'>
        <Roadmap />
      </div>
      <div className="second-avatar">
        <SecondAvatar />
      </div>
      <div className="third-avatar">
        <ThirdAvatar />
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      </Suspense>
    </>
  )
}

export default Home

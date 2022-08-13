import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Helmet } from 'react-helmet';
import './Mints.css';

const Mint = () => {
  return (
    <>
      <Helmet>
        <title>Embrace your inner BABYBEAST</title>
        <meta name='description' content='A collection of programmatically and randomly generated non-fungible tokens on the
        blockchain. BABYBEAST were born in likeness and with an adolescent curiosity, they
        embarked on a journey in search of their identity. Unbound by the concepts of time and
        space, they toddled the vast multiverse for their muse.
        '/>
        <meta name='keywords' content='Babybeast, nft, mint, minting'/>
      </Helmet>
      <div className="mint">
        <h1>Mint</h1>
        <div className='first-box'>
            <h5>PUBLIC MINT</h5>
            <h5 className='red-text'>TBA</h5>
        </div>
        <div className="second-box">
            <h5>WHITE LIST PRICE: TBA</h5>
            <h5>PUBLIC PRICE: TBA</h5>
            <h5>WHITE LIST MINT: TBA</h5>
        </div>
      </div>
      
    </>
  )
}

export default Mint

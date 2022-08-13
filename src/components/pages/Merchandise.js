import React from 'react'
import { Helmet } from 'react-helmet';
import './Merchandise.css';

const Merchandise = () => {
  return (
    <>
      <Helmet>
        <title>Never Ordinary, BABYBEAST</title>
        <meta name='description' content='Let your imagination run wild with BABYBEAST, a collection of programmatically and
randomly generated NFTs on the blockchain. BABYBEAST were spawned in likeness and
with an adolescent curiosity, they embarked on a journey in search of their identity. Unbound
by the concepts of time and space, they toddled the vast multiverse for their muse. What
emerged was a diverse display of the adored and feared, saints and sinners, straight-arrows
and delinquents.'/>
      <meta name='keywords' content='babybeast, nft, babybeast merchandise'/>
      </Helmet>
      <div className="merchandise">
        <h1>Merch</h1>
      </div>
      
    </>
  )
}

export default Merchandise

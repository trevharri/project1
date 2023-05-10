import React from 'react';
import './brand.css';
import {litelogo, dogelogo, bitcoinlogo, ripplelogo, ethlogo} from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img className='brand__img' src={bitcoinlogo} alt="bitcoin" />
      </div>
      <div>
        <img className='brand__img' src={dogelogo} alt="dogecoin" />
      </div>
      <div>
        <img className='brand__img' src={ethlogo} alt="ethereum" />
      </div>
      <div>
        <img className='brand__img' src={litelogo} alt="litecoin" />
      </div>
      <div>
        <img className='brand__img' src={ripplelogo} alt="ripplelogo" />
      </div>
    </div>
  )
}

export default Brand
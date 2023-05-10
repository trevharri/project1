import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is Crypto Stop?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Market</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Block Chain" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Security" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."/>
        <Feature title="Privacy" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
      </div>
    </div>
  )
}

export default WhatGPT3
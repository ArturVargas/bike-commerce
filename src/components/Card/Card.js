import React from 'react';

import './Card.scss';

export const Card = () => (
  <div className='container'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>BIKES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>CLOTHES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>SHOES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>HELMETS</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>ACCESSORIES</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
import React from 'react';
import arrow from '../../images/arrow.png';
import './Arrow.css';

export const Arrow = () => {
  return (
    <div className="down-arrow">
      <img className="arrow" src={arrow} alt="arrow" />
    </div>
  )
}
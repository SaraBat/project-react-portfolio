import React from 'react';
import hero from '../../images/sb.png'

export const HeroImage = () => {
  return (
    <section className="header-image">
      <img
        className="header-image-img"
        src={hero}
        alt="Sara" />
    </section>
  );
}
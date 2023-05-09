import React from 'react';
import { BioText } from './BioText';
import { BioLinks } from './BioLinks';

export const Introduction = () => {
  return (
    <section className="introduction-social-links">
      <BioText />
      <BioLinks />
    </section>

  );
}
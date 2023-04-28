import React from 'react';
import { ProfilePic } from './ProfilePic';
import { BioTitles } from './BioTitles';
import { BioText } from './BioText';
import { BioLinks } from './BioLinks';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <section>
      <ProfilePic />
      <BioTitles />
      <BioText />
      <BioLinks />
      <section>
        <HeroImage />
      </section>
    </section>

  );
}
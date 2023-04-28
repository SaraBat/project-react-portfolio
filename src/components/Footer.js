import React from 'react';
import { ProfilePic } from './ProfilePic';
import { BioTitles } from './BioTitles';
import { BioLinks } from './BioLinks';

export const Footer = () => {
  return (
    <section>
      <ProfilePic />
      <BioTitles />
      <BioLinks />
    </section>
  );
}
import React from 'react';
import { ProfilePic } from './ProfilePic';
import { BioTitles } from './BioTitles';
import { BioLinks } from './BioLinks';

export const Footer = () => {
  return (
    <section>
      <h1> Time to Talk </h1>
      <ProfilePic />
      <BioTitles />
      <BioLinks />
    </section>
  );
}
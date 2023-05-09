import React from 'react';
import { Title1 } from 'styles/Title1';
import { ProfilePic } from '../Header/ProfilePic';
import { BioTitles } from '../Header/BioTitles';
import { BioLinks } from '../Header/BioLinks';

export const Footer = () => {
  return (
    <section>
      <Title1> Time to Talk </Title1>
      <ProfilePic />
      <BioTitles />
      <BioLinks />
    </section>
  );
}
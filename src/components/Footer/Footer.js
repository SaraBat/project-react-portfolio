import React from 'react';
import { Title1 } from 'styles/Title1';
import { ProfilePic } from '../Header/ProfilePic';
import { BioTitles } from '../Header/BioTitles';
import { BioLinks } from '../Header/BioLinks';
import './Footer.css';

export const Footer = () => {
  return (
    <section className="contacts">
      <Title1> Time to Talk </Title1>
      <ProfilePic />
      <BioTitles />
      <BioLinks />
    </section>
  );
}
import React from 'react';
import { Title1 } from 'styles/Title1';
import { ProfilePic } from '../Header/ProfilePic';
import { BioTitles } from '../Header/BioTitles';
import { BioLinks } from '../Header/BioLinks';
import './Footer.css';

export const Footer = () => {
  return (
    <section className="contacts">
      <a className="contacts-title" alt="mail" href="mailto:sara.battilotti@gmail.com" target="_blank" rel="noreferrer">
        <Title1> Time to Talk </Title1>
      </a>
      <div className="text-header">
        <ProfilePic />
        <div className="info-bottom">
          <BioTitles />
        </div>
      </div>
      <div className="social-links-bottom">
        <BioLinks />
      </div>
    </section>
  );
}
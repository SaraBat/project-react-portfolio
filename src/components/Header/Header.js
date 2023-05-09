import React from 'react';
import { HeroImage } from './HeroImage';
import { BusinessCard } from './BusinessCard';
import './Header.css';

export const Header = () => {
  return (
    <section className="header">
      <HeroImage />
      <BusinessCard />
    </section>
  );
}
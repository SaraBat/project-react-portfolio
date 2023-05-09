import React from 'react';
import { TextHeader } from './TextHeader';
import { Introduction } from './Introduction';

export const BusinessCard = () => {
  return (
    <section className="business-card">
      <TextHeader />
      <Introduction />
    </section>

  );
}
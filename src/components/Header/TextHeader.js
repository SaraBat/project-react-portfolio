import React from 'react';
import { ProfilePic } from './ProfilePic';
import { BioTitles } from './BioTitles';

export const TextHeader = () => {
  return (
    <section className="text-header">
      <ProfilePic />
      <BioTitles />
    </section>

  );
}
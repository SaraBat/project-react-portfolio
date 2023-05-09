import React from 'react';
import { Title1 } from 'styles/Title1';
import { TechSkills } from './TechSkills';
import './Tech.css';

export const TechStack = () => {
  return (
    <section className="tech">
      <Title1 className="tech-title"> Tech </Title1>
      <TechSkills />
    </section>
  );
}
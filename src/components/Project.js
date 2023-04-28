import React from 'react';
import { Tag } from './Tag';

export const Project = ({ singleProject }) => {
  return (
    <section>
      <img alt="project" src={singleProject.image} />
      <h2> {singleProject.title} </h2>
      <p> {singleProject.description}</p>
      {singleProject.tags.map((singleTag) => {
        return (
          <Tag singleTag={singleTag} key={`${singleTag}`} />
        )
      })}
      <button type="button" alt="View The Code"> View the code </button>
      <button type="button" alt="Live Demo"> Live Demo </button>
    </section>
  );
}
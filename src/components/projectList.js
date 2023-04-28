import React from 'react';
import { projectArray } from './projectArray';
import { Project } from './Project';

export const ProjectList = () => {
  const Projects = () => {
    return (
      projectArray.map((singleProject) => {
        return (
          <section key={`${singleProject.title}`}>
            <Project singleProject={singleProject} />
          </section>
        )
      })
    )
  }

  return (
    <div>
      <h1> Featured Projects </h1>
      <Projects />
    </div>
  );
}
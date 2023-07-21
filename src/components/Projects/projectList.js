import React from 'react';
import { Title1 } from 'styles/Title1';
import { projectArray } from './projectArray';
import { Project } from './Project';
import { FinalProject } from './FinalProject';
import './Projects.css';

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
      <div className="div-final-project-title">
        <Title1> Fullstack Project </Title1>
      </div>
      <div className="div-final-project">
        <FinalProject />
      </div>
      <div className="div-project-title">
        <Title1> Featured Projects </Title1>
      </div>
      <div className="featured-projects">
        <Projects />
      </div>
    </div>
  );
}
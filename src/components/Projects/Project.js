import React from 'react';
import { Button } from 'styles/Button';
import { Tag } from './Tag';

export const Project = ({ singleProject }) => {
  return (
    <section className="project-list">
      <section className="project">
        <img className="project-image" alt="project" src={singleProject.image} />
        <div className="project-content">
          <h2> {singleProject.title} </h2>
          <p> {singleProject.description}</p>
          <div className="code-links">
            {singleProject.tags.map((singleTag) => {
              return (
                <Tag singleTag={singleTag} key={`${singleTag}`} />
              )
            })}
          </div>
          <div className="buttons">
            <Button
              type="button"
              alt="View The Code"
              btnColor="#EB5577"
              onClick={() => window.open(`https://github.com/SaraBat/${singleProject.githubLink}`)}>
              View the code
            </Button>
            <Button
              type="button"
              alt="Live Demo"
              btnColor="#0B24F5"
              onClick={() => window.open(`https://${singleProject.netlifyLink}.netlify.app/`)}>
              Live Demo
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}